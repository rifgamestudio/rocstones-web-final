import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner"; 
import { Inter, Baskervville } from 'next/font/google';
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const basker = Baskervville({ weight: '400', subsets: ['latin'], style: 'italic', variable: '--font-serif' });

// --- BLOQUE SEO OPTIMIZADO PARA GOOGLE ---
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://rocstones.ma'),
    title: t('title'),
    description: t('description'),
    icons: {
      icon: '/favicon.ico',
    },
    keywords: ["beton cire maroc", "microciment maroc", "beton cire casablanca", "beton cire rabat", "beton cire marrakech", "RocStones"],
    
    // CORRECCIÓN: Eliminamos 'canonical' fijo para evitar el error de "Página duplicada"
    alternates: {
      languages: {
        fr: '/fr',
        en: '/en',
        es: '/es',
        de: '/de',
        nl: '/nl',
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: '8MtMWh89RuSuTGWBkpOSPHJPP73d1nYf6wmy9z1TpC0', 
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      siteName: 'RocStones',
      images: [
        {
          url: 'https://rocstones.ma/og-image.jpg', 
          width: 1200,
          height: 630,
          alt: 'RocStones - Béton Ciré & Microciment Maroc',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      images: ['https://rocstones.ma/og-image.jpg'],
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  const locales = ['fr', 'en', 'es', 'de', 'nl'];
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  // --- DATOS ESTRUCTURADOS ACTUALIZADOS (RocStones Construction) ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RocStones Construction",
    "image": "https://rocstones.ma/og-image.jpg",
    "@id": "https://rocstones.ma",
    "url": "https://rocstones.ma",
    "telephone": "+212663601270",
    "priceRange": "$$$",
    "areaServed": "Morocco",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rue Ibn Batouta",
      "addressLocality": "Casablanca",
      "addressCountry": "MA"
    },
    "sameAs": [
      "https://www.facebook.com/betoncireaumaroc/",
      "https://www.instagram.com/beton_cire_rocstones"
    ]
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${basker.variable} antialiased font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <CookieBanner />
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}