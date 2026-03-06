import Medusa from '@medusajs/js-sdk';

// Inicializamos el cliente oficial de MedusaJS v2
// Astro utiliza "import.meta.env" para acceder a las variables de entorno
export const medusaClient = new Medusa({
  baseUrl: import.meta.env.PUBLIC_MEDUSA_BACKEND_URL || 'http://localhost:9000',
  debug: import.meta.env.NODE_ENV === 'development',
  publishableKey: import.meta.env.PUBLIC_MEDUSA_PUBLISHABLE_KEY, // La generaremos luego en el panel
});
