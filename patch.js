const fs = require('fs');
const file = '/Users/jberardinelli/Dev/deiman/page-deiman/src/pages/hogar/tienda.astro';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'h-[300px] md:h-[450px]',
  'h-[350px] md:h-[450px]'
);

content = content.replace(
  '<div class="absolute top-8 left-6 md:top-12 md:left-12 lg:top-16 lg:left-20 z-20 flex flex-col items-start',
  '<div class="absolute top-6 left-4 md:top-12 md:left-12 lg:top-16 lg:left-20 z-20 flex flex-col items-start'
);

content = content.replace(
  '<img src={logoRed.src} alt="Deiman Escencias" class="h-6 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />',
  '<img src={logoRed.src} alt="Deiman Escencias" class="h-5 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />'
);

content = content.replace(
  '<div class="h-4 w-[1px] bg-white/40"></div>\n            <span class="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold drop-shadow-md">Presenta</span>',
  '<div class="hidden md:block h-4 w-[1px] bg-white/40"></div>\n            <span class="hidden md:block text-white/90 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold drop-shadow-md">Presenta</span>'
);

content = content.replace(
  '<h2 class="font-[\'Oi\'] text-3xl md:text-4xl lg:text-5xl text-[#facc15]',
  '<h2 class="font-[\'Oi\'] text-2xl md:text-4xl lg:text-5xl text-[#facc15]'
);

content = content.replace(
  '<h2 class="font-[\'Oi\'] text-4xl md:text-5xl lg:text-6xl text-white leading-[0.7] z-10 -mt-2 md:-mt-4',
  '<h2 class="font-[\'Oi\'] text-3xl md:text-5xl lg:text-6xl text-white leading-[0.7] z-10 -mt-1 md:-mt-4'
);

content = content.replace(
  '<p class="font-[\'Dancing_Script\'] text-2xl md:text-3xl text-amber-200 absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-md rotate-[-2deg] whitespace-nowrap">\n              el secreto está en la esencia\n            </p>',
  '<p class="hidden md:block font-[\'Dancing_Script\'] text-2xl md:text-3xl text-amber-200 absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-md rotate-[-2deg] whitespace-nowrap">\n              el secreto está en la esencia\n            </p>'
);

content = content.replace(
  '<div class="absolute bottom-8 right-6 md:bottom-16 md:right-12 lg:bottom-20 lg:right-20 z-20 flex flex-col items-end text-right max-w-sm md:max-w-md',
  '<div class="absolute bottom-10 right-4 md:bottom-16 md:right-12 lg:bottom-20 lg:right-20 z-20 flex flex-col items-end text-right max-w-[200px] md:max-w-md'
);

content = content.replace(
  '<h3 class="font-[\'Dancing_Script\'] text-3xl md:text-4xl lg:text-5xl text-white mb-2',
  '<h3 class="font-[\'Dancing_Script\'] text-2xl md:text-4xl lg:text-5xl text-white mb-3 md:mb-2'
);

content = content.replace(
  '<p class="text-[12px] md:text-sm text-gray-100/90 font-medium drop-shadow-md leading-relaxed mb-6 mt-2">\n            Eleva tus',
  '<p class="hidden md:block text-[12px] md:text-sm text-gray-100/90 font-medium drop-shadow-md leading-relaxed mb-6 mt-2">\n            Eleva tus'
);

content = content.replace(
  'px-6 py-2.5 text-xs md:text-sm',
  'px-4 py-2 md:px-6 md:py-2.5 text-[11px] md:text-sm'
);

content = content.replace(
  '<span class="mr-2 relative z-10">Conseguir Esencias</span>\n            <Icon name="tabler:arrow-up-right" class="w-4 h-4 relative z-10',
  '<span class="mr-1.5 md:mr-2 relative z-10">Conseguir Esencias</span>\n            <Icon name="tabler:arrow-up-right" class="w-3.5 h-3.5 md:w-4 md:h-4 relative z-10'
);

// Slide 2
content = content.replace(
  '<h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4',
  '<h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 md:mb-4'
);
content = content.replace(
  '<p class="text-sm md:text-lg max-w-xl text-white/90',
  '<p class="text-xs md:text-lg max-w-[260px] md:max-w-xl text-white/90'
);

// Slide 3
content = content.replace(
  'pb-16 text-center',
  'pb-12 md:pb-16 text-center'
);
content = content.replace(
  '<h2 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2',
  '<h2 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 md:mb-2'
);
content = content.replace(
  '<p class="text-sm md:text-lg max-w-2xl text-white/90',
  '<p class="text-xs md:text-lg max-w-[260px] md:max-w-2xl text-white/90'
);

fs.writeFileSync(file, content);
console.log("Patched!");
