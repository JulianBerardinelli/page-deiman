export interface InstagramPost {
  id: string;
  shortcode?: string;
  displayUrl: string;
  alt?: string;
}

export interface InstagramFeedResult {
  posts: InstagramPost[];
  status: 'ok' | 'missing-token' | 'error';
}

interface FetchInstagramPostsOptions {
  count?: number;
}

const getAccessToken = () =>
  import.meta.env.INSTAGRAM_ACCESS_TOKEN ?? process.env.INSTAGRAM_ACCESS_TOKEN ?? '';

const getDisplayUrl = (node: Record<string, any>) =>
  node?.display_url ||
  node?.thumbnail_src ||
  node?.image_versions2?.candidates?.[0]?.url ||
  node?.carousel_media?.[0]?.image_versions2?.candidates?.[0]?.url ||
  '';

const mapInstagramNode = (node: Record<string, any>): InstagramPost | null => {
  const displayUrl = getDisplayUrl(node);
  if (!displayUrl) {
    return null;
  }

  return {
    id: String(node?.id ?? node?.pk ?? displayUrl),
    shortcode: node?.shortcode ?? node?.code,
    displayUrl,
    alt: node?.accessibility_caption ?? node?.caption?.text ?? node?.alt,
  };
};

const buildGraphUrl = (count: number) => {
  const url = new URL('https://graph.instagram.com/me/media');
  url.searchParams.set('fields', 'id,media_url,permalink,caption,thumbnail_url');
  url.searchParams.set('limit', String(count));
  return url.toString();
};

export const fetchInstagramLatestPosts = async ({
  count = 12,
}: FetchInstagramPostsOptions): Promise<InstagramFeedResult> => {
  const accessToken = getAccessToken();
  if (!accessToken) {
    return { posts: [], status: 'missing-token' };
  }

  try {
    const response = await fetch(buildGraphUrl(count), {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      return { posts: [], status: 'error' };
    }

    const data = (await response.json()) as Record<string, any>;
    const items = Array.isArray(data?.data) ? data.data : [];
    const posts = items
      .map((item) =>
        mapInstagramNode({
          id: item?.id,
          display_url: item?.media_url ?? item?.thumbnail_url,
          shortcode: item?.permalink?.split('/p/')[1]?.split('/')[0],
          caption: { text: item?.caption },
        })
      )
      .filter((post): post is InstagramPost => Boolean(post));

    return { posts: posts.slice(0, count), status: 'ok' };
  } catch (error) {
    console.warn('Instagram feed fetch failed', error);
    return { posts: [], status: 'error' };
  }
};
