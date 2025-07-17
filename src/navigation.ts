import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Descubri nuestros Sabores',
      links: [
        {
          text: 'Todos los sabores',
          href: getPermalink('/sabores'),
        },
        {
          text: 'Dulces',
          href: getPermalink('/sabores/dulces'),
        },
        {
          text: 'Salados',
          href: getPermalink('/sabores/salados'),
        },
        {
          text: 'Panificados',
          href: getPermalink('/sabores/panificados'),
        },
        {
          text: 'Citricos',
          href: getPermalink('/sabores/citricos'),
        },
      ],
    },
    {
      text: 'Sobre Nosotros',
      links: [
        {
          text: 'Nosotros',
          href: getPermalink('/about'),
        },
        {
          text: 'Contacto',
          href: getPermalink('/contact'),
        },
      ],
    },
  ],
  actions: [{ text: 'Contacto', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Productos',
      links: [
        { text: 'Tradicionales', href: '/products/tradicionales' },
        { text: 'Polvorones', href: '/products/polvorones' },
        { text: 'Corazoncitos', href: '/products/corazoncitos' },
      ],
    },
    {
      title: 'Soporte técnico',
      links: [{ text: 'Contacto', href: '/contact' }],
    },
    {
      title: 'Montenievas',
      links: [{ text: 'Sobre Nosotros', href: '/about' }],
    },
  ],
  secondaryLinks: [
    { text: 'Terminos y condiciones', href: '/terms' },
    { text: 'Politicas de privacidad', href: '/privacy' },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/celosasgalletitas/?hl=es',
      target: '_blank',
    },
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/CelosasGalletitas',
      target: '_blank',
    },
  ],
  footNote: `
    <img class="w-5 md:w-6  md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://www.julianberardinelli.com/logos/logo.png" alt="onWidget logo" loading="lazy"></img>
    Desarollado por <a class="text-blue-600 font-bold underline dark:text-muted" href="https://julianberardinelli.com/"> Julián Berardinelli</a> · Todos los derechos reservados.
  `,
};