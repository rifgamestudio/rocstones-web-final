import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
    // --- BLOQUE DE REDIRECCIONES ESTRATÉGICAS SEO FINAL ---
    async redirects() {
        return [
          {
            // 1. Limpieza total de la antigua Tienda (incluye subpáginas y filtros)
            source: '/boutique/:path*',
            destination: '/fr/services/beton-cire',
            permanent: true,
          },
          {
            // 2. Limpieza de productos antiguos (como el kit de 10m2)
            source: '/produit/:path*',
            destination: '/fr/services/beton-cire',
            permanent: true,
          },
          {
            // 3. Limpieza de categorías de productos (muy importante para tus 51 errores)
            source: '/categorie-produit/:path*',
            destination: '/fr/services/beton-cire',
            permanent: true,
          },
          {
            // 4. Limpieza de proyectos antiguos
            source: '/print-2021',
            destination: '/fr/realisations',
            permanent: true,
          },
          {
            // 5. Limpieza de carrito/pago/cuenta de WordPress
            source: '/panier',
            destination: '/fr/contact',
            permanent: true,
          },
          {
            source: '/commander',
            destination: '/fr/contact',
            permanent: true,
          },
          {
            source: '/mon-compte/:path*',
            destination: '/fr/contact',
            permanent: true,
          }
        ];
    },
    // ------------------------------------------------------
};

export default withNextIntl(nextConfig);