'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CookiesPage() {
  const t = useTranslations('Legal');
  return (
    <main className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen bg-background transition-colors duration-500">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-20 text-foreground tracking-tight">{t('cookies_title')}</h1>
        
        <div className="space-y-20">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('cookies_def_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{t('cookies_def_content')}</p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('cookies_manage_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-10">{t('cookies_manage_content')}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-500">
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" className="hover:text-[#786045] transition-colors">Chrome</a>
              <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" className="hover:text-[#786045] transition-colors">Safari</a>
              <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" className="hover:text-[#786045] transition-colors">Firefox</a>
              <a href="https://help.opera.com/Windows/10.20/fr/cookies.html" target="_blank" className="hover:text-[#786045] transition-colors">Opera</a>
            </div>
          </section>
        </div>

        <Link href="/" className="inline-block mt-24 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-foreground/10 pb-2 hover:text-[#786045] hover:border-[#786045] transition-all">
          {t('back')}
        </Link>
      </motion.div>
    </main>
  );
}