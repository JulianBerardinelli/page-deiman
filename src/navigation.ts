import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Industriales',
      href: getPermalink('/industriales'),
    },
    {
      text: 'Semi industriales',
      href: getPermalink('/semi-industriales'),
    },
    {
      text: 'Hogar (Proximamente)',
      href: getPermalink('/hogar'),
      isHighlighted: true,
      links: [
        {
          text: 'Sabores',
          href: getPermalink('/hogar#sabores'),
        },
        {
          text: 'Colores',
          href: getPermalink('/hogar#colores'),
        },
        {
          text: 'Sazonadores',
          href: getPermalink('/hogar#sazonadores'),
        },
      ],
    },
    {
      text: 'Productos',
      links: [
        {
          text: 'Esencias naturales',
          href: getPermalink('/productos/escencias-naturales'),
        },
        {
          text: 'Esencias',
          href: getPermalink('/productos/escencias'),
        },
        {
          text: 'Emulsiones',
          href: getPermalink('/productos/emulsiones'),
        },
        {
          text: 'Extractos de cacao',
          href: getPermalink('/productos/extracto-de-cacao'),
        },
        {
          text: 'Concentrados',
          href: getPermalink('/productos/concentrados'),
        },
      ],
    },
    {
      text: 'Desarrollos',
      href: getPermalink('/laboratorio'),
    },
    {
      text: 'Sobre Nosotros',
      href: getPermalink('/about'),
    },
  ],
  actions: [{ text: 'Contacto', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Sabores',
      links: [
        { text: 'Todos los sabores', href: '/sabores' },
        { text: 'Dulces', href: '/sabores/dulces' },
        { text: 'Salados', href: '/sabores/salados' },
        { text: 'Panificados', href: '/sabores/panificados' },
        { text: 'Cítricos', href: '/sabores/citricos' },
        { text: 'Desarrallo Personalizado', href: '/' },
      ],
      
    },
    {
      title: 'Jarabes',
      links: [
        { text: 'Siropes', href: '/siropes' },
      ],
    },
    {
      title: 'Soporte técnico',
      links: [{ text: 'Contacto', href: '/contact' }],
    },
    {
      title: 'Deiman Argentina',
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
      href: 'https://www.instagram.com/deiman.arg',
      target: '_blank',
    },
  ],
  footNote: `
    <img class="w-5 md:w-6  md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://www.julianberardinelli.com/logos/logo.png" alt="onWidget logo" loading="lazy"></img>
    Desarollado por <a class="text-blue-600 font-bold underline dark:text-muted" href="https://julianberardinelli.com/"> Julián Berardinelli</a> · Todos los derechos reservados.
  `,
};
