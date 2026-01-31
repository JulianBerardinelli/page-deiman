export interface ProductSlide {
  image: string;
  mobileImage?: string;
  title: string;
  subtitle: string;
  align?: 'center' | 'right';
}

export interface ProductVariantContent {
  headline: string;
  description: string;
  highlights: string[];
}

export interface ProductSingleContent {
  badge: string;
  headline: string;
  description: string;
  highlights: string[];
}

export interface ProductData {
  slug: string;
  name: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  slides: ProductSlide[];
  variants?: {
    industrial: ProductVariantContent;
    semiIndustrial: ProductVariantContent;
  };
  single?: ProductSingleContent;
}

const baseSlides = (title: string, subtitle: string): ProductSlide[] => [
  {
    image: '/images/carousel/car-1.jpg',
    mobileImage: '/images/carousel/car-1-phone.jpg',
    title,
    subtitle,
    align: 'center',
  },
  {
    image: '/images/carousel/car-2.jpg',
    mobileImage: '/images/carousel/car-1-phone.jpg',
    title: 'Calidad sensorial y soporte <span class="text-yellow-300">en cada lote</span>',
    subtitle:
      'Acompañamos la elección de materias primas, dosificación y ajustes para sostener perfiles consistentes.',
    align: 'right',
  },
];

export const products: ProductData[] = [
  {
    slug: 'escencias-naturales',
    name: 'Escencias naturales',
    metaDescription: 'Escencias naturales con perfiles estables para procesos industriales y semi industriales.',
    heroTitle: 'Escencias naturales con <span class="text-yellow-300">perfil auténtico</span>',
    heroDescription:
      'Notas naturales cuidadosamente seleccionadas para mantener su identidad en distintos procesos productivos.',
    slides: baseSlides(
      'Escencias naturales con <span class="text-yellow-300">impacto sensorial</span>',
      'Perfiles frescos y auténticos, diseñados para conservar su carácter en distintas aplicaciones.'
    ),
    variants: {
      industrial: {
        headline: 'Industriales',
        description:
          'Fórmulas naturales con alta estabilidad térmica y rendimiento controlado para procesos de gran escala.',
        highlights: [
          'Notas naturales con fijación prolongada y baja volatilidad.',
          'Compatibilidad con procesos térmicos y mezclas continuas.',
          'Trazabilidad de materias primas y soporte técnico especializado.',
        ],
      },
      semiIndustrial: {
        headline: 'Semi industriales',
        description:
          'Opciones naturales flexibles para lotes medianos, con ajustes rápidos y perfiles aromáticos definidos.',
        highlights: [
          'Versatilidad para diferentes líneas de producción.',
          'Buena integración en bases lácteas, panificados y bebidas.',
          'Equilibrio entre naturalidad, rendimiento y costo.',
        ],
      },
    },
  },
  {
    slug: 'escencias',
    name: 'Escencias',
    metaDescription: 'Escencias concentradas para industrias y producciones semi industriales.',
    heroTitle: 'Escencias pensadas para <span class="text-yellow-300">cada necesidad</span>',
    heroDescription:
      'Perfiles aromáticos definidos y consistentes para distintas aplicaciones alimenticias.',
    slides: baseSlides(
      'Escencias con <span class="text-yellow-300">carácter definido</span>',
      'Soluciones versátiles que respetan el perfil sensorial y la identidad de cada producto.'
    ),
    variants: {
      industrial: {
        headline: 'Industriales',
        description:
          'Escencias formuladas para soportar procesos exigentes sin perder intensidad ni fidelidad.',
        highlights: [
          'Rendimiento estable en líneas de producción continuas.',
          'Baja dosificación para optimizar costos.',
          'Compatibilidad con matrices grasas, acuosas y secas.',
        ],
      },
      semiIndustrial: {
        headline: 'Semi industriales',
        description:
          'Perfiles equilibrados para producciones medianas, con posibilidad de ajustes rápidos.',
        highlights: [
          'Adaptabilidad a cambios de receta o temporada.',
          'Buena persistencia aromática en almacenaje.',
          'Soporte para escalado gradual sin perder calidad.',
        ],
      },
    },
  },
  {
    slug: 'colorantes',
    name: 'Colorantes',
    metaDescription: 'Colorantes alimenticios estables para procesos industriales y semi industriales.',
    heroTitle: 'Colorantes con <span class="text-yellow-300">impacto visual</span>',
    heroDescription:
      'Tonales consistentes que realzan la presentación del producto final.',
    slides: baseSlides(
      'Colorantes de <span class="text-yellow-300">alta estabilidad</span>',
      'Soluciones diseñadas para mantener el color en cada etapa del proceso.'
    ),
    variants: {
      industrial: {
        headline: 'Industriales',
        description:
          'Colorantes con alta resistencia a temperatura, luz y pH para procesos intensivos.',
        highlights: [
          'Uniformidad cromática en lotes de gran escala.',
          'Compatibles con líneas de alta velocidad.',
          'Soporte en formulación para evitar variaciones.',
        ],
      },
      semiIndustrial: {
        headline: 'Semi industriales',
        description:
          'Colorantes flexibles que permiten ajustes rápidos sin perder estabilidad.',
        highlights: [
          'Alta dispersión en bases líquidas y sólidas.',
          'Variaciones cromáticas controladas por lote.',
          'Fácil integración en procesos artesanales escalados.',
        ],
      },
    },
  },
  {
    slug: 'emulsiones',
    name: 'Emulsiones',
    metaDescription: 'Emulsiones estables para aplicaciones industriales y semi industriales.',
    heroTitle: 'Emulsiones con <span class="text-yellow-300">rendimiento estable</span>',
    heroDescription:
      'Soluciones que mejoran textura, dispersión y uniformidad en distintas matrices.',
    slides: baseSlides(
      'Emulsiones con <span class="text-yellow-300">estabilidad superior</span>',
      'Textura y homogeneidad garantizadas para procesos exigentes.'
    ),
    variants: {
      industrial: {
        headline: 'Industriales',
        description:
          'Emulsiones diseñadas para procesos continuos y mezclas de alto rendimiento.',
        highlights: [
          'Mejora de textura y estabilidad en productos finales.',
          'Compatibilidad con líneas automatizadas y grandes volúmenes.',
          'Reducción de separación en almacenamiento prolongado.',
        ],
      },
      semiIndustrial: {
        headline: 'Semi industriales',
        description:
          'Emulsiones versátiles para producciones medianas con foco en homogeneidad.',
        highlights: [
          'Fácil incorporación en procesos por lotes.',
          'Mayor control sobre viscosidad y dispersión.',
          'Soporte técnico para ajustes rápidos.',
        ],
      },
    },
  },
  {
    slug: 'extracto-de-cacao',
    name: 'Extracto de cacao',
    metaDescription: 'Extracto de cacao para procesos industriales de gran escala.',
    heroTitle: 'Extracto de cacao <span class="text-yellow-300">industrial</span>',
    heroDescription:
      'Notas profundas y consistentes, formuladas para aplicaciones exigentes.',
    slides: baseSlides(
      'Extracto de cacao con <span class="text-yellow-300">perfil intenso</span>',
      'Aporta cuerpo y carácter a formulaciones industriales.'
    ),
    single: {
      badge: 'Solo industriales',
      headline: 'Extracto de cacao para gran escala',
      description:
        'Soluciones diseñadas para mantener intensidad y estabilidad en procesos industriales de alta demanda.',
      highlights: [
        'Notas profundas y persistentes en matrices complejas.',
        'Excelente rendimiento en procesos térmicos.',
        'Homogeneidad aromática en grandes volúmenes.',
      ],
    },
  },
  {
    slug: 'concentrados',
    name: 'Concentrados',
    metaDescription: 'Concentrados para producciones semi industriales con alta adaptabilidad.',
    heroTitle: 'Concentrados con <span class="text-yellow-300">flexibilidad</span>',
    heroDescription:
      'Perfiles intensos y rendidores para producciones medianas.',
    slides: baseSlides(
      'Concentrados con <span class="text-yellow-300">alto rendimiento</span>',
      'Pensados para potenciar sabor con dosificación eficiente.'
    ),
    single: {
      badge: 'Solo semi industriales',
      headline: 'Concentrados para lotes medianos',
      description:
        'Soluciones concentradas que permiten ajustes rápidos en producciones semi industriales.',
      highlights: [
        'Alta intensidad aromática con baja dosificación.',
        'Flexibilidad para ajustes según temporada o receta.',
        'Consistencia sensorial en lotes medianos.',
      ],
    },
  },
];
