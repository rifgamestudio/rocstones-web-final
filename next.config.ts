import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // --- BLOQUE DE REDIRECCIONES ESTRATÉGICAS SEO ---
    async redirects() {
        return [
          {
            // 1. Limpieza de la antigua Tienda
            source: '/boutique',
            destination: '/fr/services/beton-cire',
            permanent: true, // Esto es un 301 (traspasa el posicionamiento)
          },
          {
            // 2. Limpieza de productos antiguos (como el kit de 10m2)
            // El :path* captura cualquier producto antiguo y lo manda a servicios
            source: '/produit/:path*',
            destination: '/fr/services/beton-cire',
            permanent: true,
          },
          {
            // 3. Limpieza de proyectos antiguos
            source: '/print-2021',
            destination: '/fr/realisations',
            permanent: true,
          },
          {
            // 4. Limpieza de carrito/pago (si existían)
            source: '/panier',
            destination: '/fr/contact',
            permanent: true,
          },
          {
            source: '/commander',
            destination: '/fr/contact',
            permanent: true,
          }
        ];
    },
    // -----------------------------------------------
};

export default withNextIntl(nextConfig);