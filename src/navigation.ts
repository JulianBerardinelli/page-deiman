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
      text: 'Hogar',
      href: getPermalink('/hogar'),
    },
    {
      text: 'Productos',
      links: [
        {
          text: 'Esencias Naturales',
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
          text: 'Extractos de Cacao',
          href: getPermalink('/productos/extracto-de-cacao'),
        },
        {
          text: 'Concentrados',
          href: getPermalink('/productos/concentrados'),
        },
        {
          text: 'Colorantes',
          href: getPermalink('/productos/colorantes'),
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
      title: 'Productos',
      links: [
        { text: 'Esencias Naturales', href: '/productos/escencias-naturales' },
        { text: 'Esencias', href: '/productos/escencias' },
        { text: 'Emulsiones', href: '/productos/emulsiones' },
        { text: 'Extractos de Cacao', href: '/productos/extracto-de-cacao' },
        { text: 'Concentrados', href: '/productos/concentrados' },
        { text: 'Colorantes', href: '/productos/colorantes' },
      ],
    },
    {
      title: 'Líneas',
      links: [
        { text: 'Industriales', href: '/industriales' },
        { text: 'Semi industriales', href: '/semi-industriales' },
        { text: 'Hogar', href: '/hogar' },
      ],
    },
    {
      title: 'Compañía',
      links: [
        { text: 'Sobre Nosotros', href: '/about' },
        { text: 'Desarrollos', href: '/laboratorio' },
        { text: 'Contacto', href: '/contact' },
      ],
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
