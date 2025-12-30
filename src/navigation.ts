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
          text: 'Cítricos',
          href: getPermalink('/sabores/citricos'),
        },
        {
          text: 'Picantes',
          href: getPermalink('/sabores/picantes'),
        },
        {
          text: 'Siropes',
          href: getPermalink('/siropes'),
        },
      ],
    },
    {
      text: 'Industriales',
      links: [
        {
          text: 'Naturales',
          href: getPermalink('/industriales/naturales'),
        },
        {
          text: 'Esencias',
          href: getPermalink('/industriales/esencias'),
        },
        {
          text: 'Colorantes',
          href: getPermalink('/industriales/colorantes'),
        },
        {
          text: 'Emulsiones',
          href: getPermalink('/industriales/emulsiones'),
        },
        {
          text: 'Extracto de cacao',
          href: getPermalink('/industriales/extracto-de-cacao'),
        },
        {
          text: 'Desarrollos',
          href: getPermalink('/industriales/desarrollos'),
        },
      ],
    },
    {
      text: 'Semi-industriales',
      links: [
        {
          text: 'Naturales',
          href: getPermalink('/semi-industriales/naturales'),
        },
        {
          text: 'Esencias',
          href: getPermalink('/semi-industriales/esencias'),
        },
        {
          text: 'Colorantes',
          href: getPermalink('/semi-industriales/colorantes'),
        },
        {
          text: 'Emulsiones',
          href: getPermalink('/semi-industriales/emulsiones'),
        },
        {
          text: 'Concentrados',
          href: getPermalink('/semi-industriales/concentrados'),
        },
      ],
    },
    {
      text: 'Hogar',
      href: getPermalink('/hogar'),
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
        { text: 'Picantes', href: '/sabores/picantes' },
        { text: 'Siropes', href: '/siropes' },
      ],
    },
    {
      title: 'Industriales',
      links: [
        { text: 'Naturales', href: '/industriales/naturales' },
        { text: 'Esencias', href: '/industriales/esencias' },
        { text: 'Colorantes', href: '/industriales/colorantes' },
        { text: 'Emulsiones', href: '/industriales/emulsiones' },
        { text: 'Extracto de cacao', href: '/industriales/extracto-de-cacao' },
        { text: 'Desarrollos', href: '/industriales/desarrollos' },
      ],
    },
    {
      title: 'Semi-industriales',
      links: [
        { text: 'Naturales', href: '/semi-industriales/naturales' },
        { text: 'Esencias', href: '/semi-industriales/esencias' },
        { text: 'Colorantes', href: '/semi-industriales/colorantes' },
        { text: 'Emulsiones', href: '/semi-industriales/emulsiones' },
        { text: 'Concentrados', href: '/semi-industriales/concentrados' },
      ],
    },
    {
      title: 'Hogar',
      links: [
        { text: 'Próximamente', href: '/hogar' },
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
