import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en', 'es', 'de', 'nl'];
  const routes = ['', '/services/beton-cire', '/services/concrete-walls', '/services/micro-ciment', '/professionnels', '/realisations', '/contact'];
  
  const sitemaps = locales.flatMap((locale) =>
    routes.map((route) => ({
      // HEMOS QUITADO LAS WWW PARA COINCIDIR CON EL LAYOUT Y EVITAR ERRORES DE SEO
      url: `https://rocstones.ma/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  );
 
  return sitemaps;
}