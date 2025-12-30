import escenciasImage from '~/assets/images/escencias.jpg';
import laboratorioImage from '~/assets/images/laboratorio.jpg';
import frutillasProduccionImage from '~/assets/images/frutillas-produccion.jpg';
import granjaLimasImage from '~/assets/images/granja-limas.jpg';
import frascosFrambuesaImage from '~/assets/images/frascos-frambuesa.jpg';
import image1 from '~/assets/images/image-1.jpg';
import image2 from '~/assets/images/image-2.jpg';
import image3 from '~/assets/images/image-3.jpg';
import image4 from '~/assets/images/image-4.jpg';

export const industrialesSection = {
  title: 'Industriales',
  subtitle: 'Sabores, colorantes y soluciones técnicas diseñadas para líneas de alta escala.',
  tagline: 'Líneas para producción intensiva',
  description:
    'Soluciones robustas, estables y consistentes para procesos industriales. Acompañamos a cada cliente desde el desarrollo hasta la producción.',
  overviewItems: [
    {
      title: 'Rendimiento en grandes volúmenes',
      description: 'Formulaciones pensadas para producir a gran escala con consistencia lote a lote.',
    },
    {
      title: 'Soporte técnico especializado',
      description: 'Asesoría y acompañamiento para optimizar cada etapa del proceso industrial.',
    },
  ],
  categories: [
    {
      title: 'Naturales',
      description: 'Sabores naturales líquidos con trazabilidad garantizada.',
      icon: 'tabler:leaf',
      callToAction: { text: 'Ver más', href: '/industriales/naturales' },
    },
    {
      title: 'Esencias',
      description: 'Perfiles aromáticos intensos en líquidos y polvos.',
      icon: 'tabler:flame',
      callToAction: { text: 'Ver más', href: '/industriales/esencias' },
    },
    {
      title: 'Colorantes',
      description: 'Tonalidades estables para procesos exigentes.',
      icon: 'tabler:palette',
      callToAction: { text: 'Ver más', href: '/industriales/colorantes' },
    },
    {
      title: 'Emulsiones',
      description: 'Integración perfecta de aromas y aceites esenciales.',
      icon: 'tabler:droplet',
      callToAction: { text: 'Ver más', href: '/industriales/emulsiones' },
    },
    {
      title: 'Extracto de cacao',
      description: 'Notas profundas de cacao para formulaciones premium.',
      icon: 'tabler:cup',
      callToAction: { text: 'Ver más', href: '/industriales/extracto-de-cacao' },
    },
    {
      title: 'Desarrollos',
      description: 'Laboratorio de desarrollo personalizado para cada cliente.',
      icon: 'tabler:flask',
      callToAction: { text: 'Ver más', href: '/industriales/desarrollos' },
    },
  ],
  carouselSlides: [
    {
      title: 'Soluciones <span class="text-yellow-300">industriales</span> de alto rendimiento',
      description:
        'Sabores, emulsiones y colorantes formulados para mantener estabilidad, intensidad y performance en líneas de producción exigentes.',
      image: '/images/carousel/car-1.jpg',
      imageMobile: '/images/carousel/car-1-phone.jpg',
      align: 'center',
    },
    {
      title: 'Precisión técnica para<br /><span class="text-yellow-300">procesos a gran escala</span>',
      description:
        'Desarrollos con soporte de laboratorio, materias primas seleccionadas y un enfoque en la consistencia lote a lote.',
      image: '/images/carousel/car-2.jpg',
      align: 'right',
    },
  ],
  pages: [
    {
      slug: 'naturales',
      title: 'Naturales',
      subtitle: 'Sabores naturales líquidos para producciones industriales.',
      tagline: 'Pureza y rendimiento',
      image: granjaLimasImage,
      carouselImage: '/images/carousel/car-1.jpg',
      carouselImageMobile: '/images/carousel/car-1-phone.jpg',
      rangeItems: [
        {
          title: 'Origen controlado y trazabilidad total',
          description:
            'Ingredientes seleccionados con estrictos estándares de calidad para lograr perfiles auténticos y consistentes en cada lote.',
        },
        {
          title: 'Performance industrial garantizada',
          description:
            'Estabilidad térmica y compatibilidad con procesos continuos para mantener el perfil sensorial durante la producción.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Naturales líquidos listos para integrar',
          description:
            'Soluciones concentradas para bebidas, lácteos y bases industriales con facilidad de dosificación.',
          bullets: ['Alta solubilidad', 'Estables a temperatura y pH', 'Compatibles con líneas continuas'],
        },
      ],
    },
    {
      slug: 'esencias',
      title: 'Esencias',
      subtitle: 'Perfiles aromáticos versátiles para múltiples aplicaciones.',
      tagline: 'Intensidad y fidelidad sensorial',
      image: escenciasImage,
      carouselImage: '/images/carousel/car-flavor-1.jpg',
      carouselImageMobile: '/images/carousel/car-flavor-phone-1.jpg',
      rangeItems: [
        {
          title: 'Notas auténticas y definidas',
          description:
            'Perfiles frutales, dulces y especiados desarrollados para mantener el carácter del sabor en matrices complejas.',
        },
        {
          title: 'Formulaciones adaptadas al proceso',
          description:
            'Trabajamos con matrices líquidas y secas, manteniendo estabilidad y rendimiento sensorial.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Esencias líquidas de alta intensidad',
          description: 'Soluciones concentradas listas para integrar en bebidas, lácteos y jarabes industriales.',
          bullets: ['Dosificación precisa', 'Dispersión homogénea', 'Excelente estabilidad térmica'],
        },
        {
          label: 'Polvos',
          title: 'Esencias en polvo para procesos secos',
          description: 'Ideales para panificados, snacks o mezclas secas que requieren alta fijación aromática.',
          bullets: ['Baja higroscopicidad', 'Perfil aromático persistente', 'Compatibles con mezclas secas'],
        },
      ],
    },
    {
      slug: 'colorantes',
      title: 'Colorantes',
      subtitle: 'Soluciones cromáticas estables para gran escala.',
      tagline: 'Color y seguridad en cada lote',
      image: image1,
      carouselImage: '/images/carousel/car-2.jpg',
      rangeItems: [
        {
          title: 'Colores uniformes y duraderos',
          description: 'Formulaciones diseñadas para mantener intensidad durante procesos térmicos y de almacenamiento.',
        },
        {
          title: 'Compatibilidad con diversas matrices',
          description: 'Aplicables en líquidos, emulsiones y polvos sin alterar sabor ni textura.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Colorantes líquidos de alta concentración',
          description: 'Fáciles de integrar en bebidas, salsas y bases industriales.',
          bullets: ['Aplicación homogénea', 'Alta estabilidad', 'Tonalidades consistentes'],
        },
        {
          label: 'Polvos',
          title: 'Colorantes en polvo para matrices secas',
          description: 'Solución ideal para polvos instantáneos, snacks y mixes industriales.',
          bullets: ['Gran poder tintóreo', 'Baja humedad', 'Alta dispersión'],
        },
      ],
    },
    {
      slug: 'emulsiones',
      title: 'Emulsiones',
      subtitle: 'Integración perfecta de aromas y aceites esenciales.',
      tagline: 'Estabilidad y homogeneidad',
      image: image2,
      carouselImage: '/images/carousel/car-flavor-2.jpg',
      rangeItems: [
        {
          title: 'Texturas estables en producción continua',
          description: 'Emulsiones diseñadas para soportar variaciones de temperatura y agitación intensiva.',
        },
        {
          title: 'Perfil sensorial equilibrado',
          description: 'Aseguramos uniformidad de sabor y apariencia en cada lote.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Emulsiones líquidas listas para usar',
          description: 'Ideales para bebidas saborizadas, lácteos y bases líquidas industriales.',
          bullets: ['Alta estabilidad', 'Fácil dosificación', 'Excelente dispersión'],
        },
        {
          label: 'Polvos',
          title: 'Emulsiones en polvo',
          description: 'Aplicaciones en mezclas secas, panificados y polvos instantáneos.',
          bullets: ['Estabilidad en almacenamiento', 'Protección de aroma', 'Integración uniforme'],
        },
      ],
    },
    {
      slug: 'extracto-de-cacao',
      title: 'Extracto de cacao',
      subtitle: 'Notas intensas y auténticas de cacao para formulaciones premium.',
      tagline: 'Cuerpo y profundidad',
      image: image3,
      carouselImage: '/images/carousel/car-flavor-1.jpg',
      carouselImageMobile: '/images/carousel/car-flavor-phone-1.jpg',
      rangeItems: [
        {
          title: 'Perfil sensorial profundo',
          description: 'Cacao seleccionado para aportar notas amargas y tostadas con gran persistencia.',
        },
        {
          title: 'Aplicaciones versátiles',
          description: 'Ideal para bebidas, helados, rellenos y productos de alta rotación.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Extractos líquidos concentrados',
          description: 'Soluciones para procesos industriales que requieren dispersión rápida.',
          bullets: ['Alta concentración', 'Rápida integración', 'Perfil consistente'],
        },
      ],
    },
    {
      slug: 'desarrollos',
      title: 'Desarrollos',
      subtitle: 'Laboratorio de desarrollo para soluciones personalizadas.',
      tagline: 'Innovación y soporte técnico',
      image: laboratorioImage,
      carouselImage: '/images/carousel/car-flavor-2.jpg',
      rangeItems: [
        {
          title: 'Desarrollo técnico centrado en el cliente',
          description:
            'Creamos perfiles aromáticos exclusivos adaptados a los procesos y objetivos de cada cliente.',
        },
        {
          title: 'Aplicación transversal en múltiples industrias',
          description:
            'Acompañamos cada proyecto desde la idea hasta el producto final, asegurando estabilidad y diferenciación.',
        },
      ],
      features: [
        {
          title: 'Vainillas y derivados',
          description: 'Notas cálidas y envolventes: vainilla, dulce de leche, marroc y más.',
          icon: 'tabler:ice-cream',
        },
        {
          title: 'Chocolates',
          description: 'Cacao intenso, chocolate con leche y perfiles semi amargos para productos premium.',
          icon: 'tabler:candy',
        },
        {
          title: 'Frutales',
          description: 'Sabores definidos y frescos: frutos rojos, cítricos, banana, ananá y más.',
          icon: 'tabler:apple',
        },
        {
          title: 'Especiados y panificados',
          description: 'Canela, miel, caramelo y esencias que evocan lo artesanal.',
          icon: 'tabler:bread',
        },
        {
          title: 'Mentolados y herbales',
          description: 'Menta, eucalipto y perfiles verdes para aplicaciones refrescantes o funcionales.',
          icon: 'tabler:plant',
        },
        {
          title: 'Amplia aplicabilidad',
          description: 'Formulaciones compatibles con alimentos, bebidas, suplementos y cosmética.',
          icon: 'tabler:tool',
        },
      ],
    },
  ],
};

export const semiIndustrialesSection = {
  title: 'Semi-industriales',
  subtitle: 'Líneas flexibles para producción mediana y artesanal.',
  tagline: 'Versatilidad en cada formulación',
  description:
    'Sabores y colorantes pensados para escalas medias, con soporte técnico y estabilidad garantizada en procesos artesanales.',
  overviewItems: [
    {
      title: 'Flexibilidad en cada proceso',
      description: 'Soluciones listas para integrarse a producciones medianas y artesanales.',
    },
    {
      title: 'Estabilidad y rendimiento',
      description: 'Formulaciones consistentes para mantener el perfil sensorial en cada lote.',
    },
  ],
  categories: [
    {
      title: 'Naturales',
      description: 'Sabores naturales líquidos para procesos semi-industriales.',
      icon: 'tabler:leaf',
      callToAction: { text: 'Ver más', href: '/semi-industriales/naturales' },
    },
    {
      title: 'Esencias',
      description: 'Notas aromáticas en líquidos y polvos.',
      icon: 'tabler:flame',
      callToAction: { text: 'Ver más', href: '/semi-industriales/esencias' },
    },
    {
      title: 'Colorantes',
      description: 'Color estable para producciones medianas.',
      icon: 'tabler:palette',
      callToAction: { text: 'Ver más', href: '/semi-industriales/colorantes' },
    },
    {
      title: 'Emulsiones',
      description: 'Homogeneidad y sabor en cada preparación.',
      icon: 'tabler:droplet',
      callToAction: { text: 'Ver más', href: '/semi-industriales/emulsiones' },
    },
    {
      title: 'Concentrados',
      description: 'Alta intensidad sensorial en líquidos y polvos.',
      icon: 'tabler:bolt',
      callToAction: { text: 'Ver más', href: '/semi-industriales/concentrados' },
    },
  ],
  carouselSlides: [
    {
      title: 'Líneas <span class="text-yellow-300">semi-industriales</span> con espíritu artesanal',
      description: 'Soluciones equilibradas para producir con consistencia sin perder identidad.',
      image: '/images/carousel/car-flavor-1.jpg',
      imageMobile: '/images/carousel/car-flavor-phone-1.jpg',
      align: 'center',
    },
    {
      title: 'Flexibilidad para <span class="text-yellow-300">producciones medianas</span>',
      description: 'Aromas, colorantes y emulsiones con fácil integración en procesos mixtos.',
      image: '/images/carousel/car-flavor-2.jpg',
      align: 'right',
    },
  ],
  pages: [
    {
      slug: 'naturales',
      title: 'Naturales',
      subtitle: 'Sabores naturales para procesos semi-industriales.',
      tagline: 'Equilibrio y autenticidad',
      image: frutillasProduccionImage,
      carouselImage: '/images/carousel/car-1.jpg',
      carouselImageMobile: '/images/carousel/car-1-phone.jpg',
      rangeItems: [
        {
          title: 'Sabores honestos y reconocibles',
          description: 'Perfiles naturales que aportan autenticidad en productos de mediana escala.',
        },
        {
          title: 'Fácil integración en procesos mixtos',
          description: 'Formulaciones pensadas para líneas artesanales e industriales ligeras.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Naturales líquidos listos para producción',
          description: 'Soluciones versátiles para bebidas, panificados y postres.',
          bullets: ['Dosificación simple', 'Estabilidad en frío y calor', 'Perfil sensorial limpio'],
        },
      ],
    },
    {
      slug: 'esencias',
      title: 'Esencias',
      subtitle: 'Notas aromáticas consistentes para producciones medianas.',
      tagline: 'Identidad y rendimiento',
      image: escenciasImage,
      carouselImage: '/images/carousel/car-flavor-1.jpg',
      carouselImageMobile: '/images/carousel/car-flavor-phone-1.jpg',
      rangeItems: [
        {
          title: 'Aromas balanceados',
          description: 'Sabores con buena persistencia y excelente rendimiento en matrices mixtas.',
        },
        {
          title: 'Compatibilidad con distintas bases',
          description: 'Formulaciones líquidas y en polvo para procesos húmedos o secos.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Esencias líquidas para aplicaciones flexibles',
          description: 'Perfectas para bebidas, helados o rellenos en escala media.',
          bullets: ['Fácil integración', 'Perfil estable', 'Aromas intensos'],
        },
        {
          label: 'Polvos',
          title: 'Esencias en polvo de rápida mezcla',
          description: 'Ideal para mezclas secas, premezclas y panificados.',
          bullets: ['Alta fijación aromática', 'Baja humedad', 'Rendimiento consistente'],
        },
      ],
    },
    {
      slug: 'colorantes',
      title: 'Colorantes',
      subtitle: 'Color estable en procesos de mediana escala.',
      tagline: 'Tonalidades confiables',
      image: image4,
      carouselImage: '/images/carousel/car-2.jpg',
      rangeItems: [
        {
          title: 'Resultados uniformes',
          description: 'Colores definidos para productos artesanales y semi-industriales.',
        },
        {
          title: 'Aplicaciones versátiles',
          description: 'Formulaciones compatibles con bases líquidas, cremosas o secas.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Colorantes líquidos para procesos artesanales',
          description: 'Se integran fácilmente sin alterar sabor ni textura.',
          bullets: ['Tonalidades estables', 'Dosificación directa', 'Alta compatibilidad'],
        },
        {
          label: 'Polvos',
          title: 'Colorantes en polvo para mezclas secas',
          description: 'Perfectos para productos horneados o premezclas.',
          bullets: ['Gran poder tintóreo', 'Fácil almacenaje', 'Resultados homogéneos'],
        },
      ],
    },
    {
      slug: 'emulsiones',
      title: 'Emulsiones',
      subtitle: 'Texturas estables y perfiles aromáticos integrados.',
      tagline: 'Homogeneidad y sabor',
      image: image2,
      carouselImage: '/images/carousel/car-flavor-2.jpg',
      rangeItems: [
        {
          title: 'Emulsiones seguras y consistentes',
          description: 'Mantienen estabilidad y apariencia uniforme en producciones medianas.',
        },
        {
          title: 'Compatibilidad con procesos mixtos',
          description: 'Fácil incorporación en bases líquidas o semisólidas.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Emulsiones líquidas listas para usar',
          description: 'Ideales para bebidas, postres y bases lácteas.',
          bullets: ['Alta estabilidad', 'Dispersión homogénea', 'Sabor equilibrado'],
        },
        {
          label: 'Polvos',
          title: 'Emulsiones en polvo para mezclas secas',
          description: 'Soluciones prácticas para procesos artesanales.',
          bullets: ['Estabilidad prolongada', 'Protección de aromas', 'Fácil almacenamiento'],
        },
      ],
    },
    {
      slug: 'concentrados',
      title: 'Concentrados',
      subtitle: 'Soluciones concentradas para potenciar sabores y aromas.',
      tagline: 'Impacto sensorial',
      image: frascosFrambuesaImage,
      carouselImage: '/images/carousel/car-flavor-1.jpg',
      carouselImageMobile: '/images/carousel/car-flavor-phone-1.jpg',
      rangeItems: [
        {
          title: 'Concentración y rendimiento',
          description: 'Formulaciones intensas para obtener mayor impacto sensorial con menor dosificación.',
        },
        {
          title: 'Versatilidad de aplicación',
          description: 'Compatibles con bebidas, panificados, helados y productos artesanales.',
        },
      ],
      tabs: [
        {
          label: 'Líquidas',
          title: 'Concentrados líquidos',
          description: 'Potencian el sabor con alta solubilidad y rápida integración.',
          bullets: ['Alta intensidad', 'Dosificación precisa', 'Uso flexible'],
        },
        {
          label: 'Polvos',
          title: 'Concentrados en polvo',
          description: 'Soluciones prácticas para mezclas secas y aplicaciones rápidas.',
          bullets: ['Perfil persistente', 'Baja humedad', 'Fácil almacenamiento'],
        },
      ],
    },
  ],
};
