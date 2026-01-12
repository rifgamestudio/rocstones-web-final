import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Lista actualizada con Alemán y Holandés
const locales = ['fr', 'en', 'es', 'de', 'nl'];

export default getRequestConfig(async ({ requestLocale }) => {
  // Esperamos al locale
  const locale = await requestLocale;

  // Validamos que exista y esté en nuestra lista
  if (!locale || !locales.includes(locale as any)) notFound();

  return {
    locale: locale as string,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});