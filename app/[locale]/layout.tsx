import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from "../../components/Header";
import Footer from "../../components/Footer"; // Importamos el nuevo Footer
import { Inter, Baskervville } from 'next/font/google';
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const basker = Baskervville({ weight: '400', subsets: ['latin'], style: 'italic', variable: '--font-serif' });

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Lista actualizada con los 5 idiomas autorizados
  const locales = ['fr', 'en', 'es', 'de', 'nl'];
  
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${basker.variable} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {/* El contenido de cada página */}
            {children}
            {/* El pie de página global */}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}