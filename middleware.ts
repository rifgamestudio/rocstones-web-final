import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // Lista actualizada con los 5 idiomas
  locales: ['fr', 'en', 'es', 'de', 'nl'],
  defaultLocale: 'fr',
  localePrefix: 'always'
});
 
export const config = {
  // Matcher actualizado para reconocer las nuevas rutas /de/ y /nl/
  matcher: ['/', '/(fr|en|es|de|nl)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};