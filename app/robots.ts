import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Si tienes alguna zona de admin
    },
    sitemap: 'https://www.rocstones.ma/sitemap.xml',
  }
}