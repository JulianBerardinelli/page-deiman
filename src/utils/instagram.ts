export interface InstagramPost {
  id: string;
  shortcode?: string;
  displayUrl: string;
  alt?: string;
}

interface FetchInstagramPostsOptions {
  username: string;
  count?: number;
}

const buildInstagramProfileUrl = (username: string) => {
  const url = new URL(`https://www.instagram.com/${username}/`);
  url.searchParams.set('__a', '1');
  url.searchParams.set('__d', 'dis');
  return url.toString();
};

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

export const fetchInstagramLatestPosts = async ({ username, count = 12 }: FetchInstagramPostsOptions) => {
  try {
    const response = await fetch(buildInstagramProfileUrl(username), {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        Accept: 'application/json',
        'Accept-Language': 'en-US,en;q=0.9',
      },
    });

    if (!response.ok) {
      return [] as InstagramPost[];
    }

    const data = (await response.json()) as Record<string, any>;
    const edges =
      data?.graphql?.user?.edge_owner_to_timeline_media?.edges ??
      data?.data?.user?.edge_owner_to_timeline_media?.edges ??
      data?.items ??
      [];

    const posts = Array.isArray(edges)
      ? edges
          .map((edge) => (edge?.node ? mapInstagramNode(edge.node) : mapInstagramNode(edge)))
          .filter((post): post is InstagramPost => Boolean(post))
      : [];

    return posts.slice(0, count);
  } catch (error) {
    console.warn('Instagram feed fetch failed', error);
    return [] as InstagramPost[];
  }
};
