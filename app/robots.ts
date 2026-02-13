import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // 1. PERMITIMOS lo que queremos posicionar (Tu nueva web)
      allow: [
        '/',
        '/fr/',
        '/es/',
        '/en/',
        '/de/',
        '/nl/',
        '/img/',
      ],
      // 2. BLOQUEAMOS de raíz todo el rastro de WordPress y la antigua tienda
      disallow: [
        '/*?*',                // Bloquea CUALQUIER URL con parámetros (filtros, búsquedas, etc.)
        '/boutique/',          // Bloquea la antigua tienda
        '/produit/',           // Bloquea los antiguos productos
        '/categorie-produit/', // Bloquea las antiguas categorías
        '/wp-admin/',          // Bloquea el panel de WordPress
        '/wp-login.php',       // Bloquea el acceso de WordPress
        '/xmlrpc.php',         // Seguridad extra
        '/private/',
      ],
    },
    sitemap: 'https://rocstones.ma/sitemap.xml',
  }
}