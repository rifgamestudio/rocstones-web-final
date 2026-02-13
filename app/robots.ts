import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/fr',
        '/es',
        '/en',
        '/de',
        '/nl',
        '/img/',
      ],
      disallow: [
        '/*?*',      // BLOQUEA todas las URLs con parámetros (la basura de WordPress)
        '/private/',
        '/cgi-bin/',
      ],
    },
    sitemap: 'https://rocstones.ma/sitemap.xml',
  }
}