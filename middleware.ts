import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Lista con los 5 idiomas
  locales: ['fr', 'en', 'es', 'de', 'nl'],
  
  // Idioma por defecto absoluto
  defaultLocale: 'fr',
  
  // Fuerza a que siempre aparezca el prefijo /fr/
  localePrefix: 'always',

  // DESACTIVA LA DETECCIÓN AUTOMÁTICA: 
  // Esto obliga a Google a entrar siempre por el francés 
  // en lugar de intentar adivinar el idioma.
  localeDetection: false 
});
 
export const config = {
  // Matcher actualizado
  matcher: ['/', '/(fr|en|es|de|nl)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};