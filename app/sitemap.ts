import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['fr', 'en', 'es', 'de', 'nl'];
  const routes = ['', '/services/beton-cire', '/services/concrete-walls', '/services/micro-ciment', '/professionnels', '/realisations', '/contact'];
  
  const sitemaps = locales.flatMap((locale) =>
    routes.map((route) => {
      const url = `https://rocstones.ma/${locale}${route}`;
      
      return {
        url: url,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
        // AÑADIDO: Esto es lo que Google ama para webs multi-idioma
        // Evita errores de "Página duplicada"
        languages: {
          fr: `https://rocstones.ma/fr${route}`,
          en: `https://rocstones.ma/en${route}`,
          es: `https://rocstones.ma/es${route}`,
          de: `https://rocstones.ma/de${route}`,
          nl: `https://rocstones.ma/nl${route}`,
        },
      };
    })
  );
 
  return sitemaps;
}