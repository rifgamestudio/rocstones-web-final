import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Inter, Baskervville } from 'next/font/google';
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const basker = Baskervville({ weight: '400', subsets: ['latin'], style: 'italic', variable: '--font-serif' });

// --- BLOQUE SEO PARA GOOGLE, REDES SOCIALES Y FAVICON ---
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://www.rocstones.ma'),
    title: t('title'),
    description: t('description'),
    
    // AQUÍ ESTÁ EL CÓDIGO DEL FAVICON:
    icons: {
      icon: '/favicon.ico', // Este archivo debe estar en tu carpeta "public"
    },

    keywords: ["beton cire maroc", "microciment maroc", "beton cire casablanca", "beton cire rabat", "beton cire marrakech", "RocStones"],
    alternates: {
      canonical: `https://www.rocstones.ma/${locale}`,
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
      google: 'TU_CODIGO_AQUI', 
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://www.rocstones.ma/${locale}`,
      siteName: 'RocStones',
      images: [
        {
          url: '/og-image.jpg', 
          width: 1200,
          height: 630,
          alt: 'RocStones - Béton Ciré & Terrazzo Maroc',
        },
      ],
      locale: locale,
      type: 'website',
    },
  };
}
// ------------------------------

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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${basker.variable} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}