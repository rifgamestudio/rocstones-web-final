'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
  const t = useTranslations('Legal');
  return (
    <main className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen bg-background transition-colors duration-500">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-6xl font-serif italic mb-20 text-foreground tracking-tight">{t('mentions_title')}</h1>
        
        <div className="space-y-20">
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('id_subtitle')}</h2>
            <div className="text-gray-600 dark:text-gray-400 font-light leading-relaxed space-y-4">
              <p>{t('id_content')}</p>
              <div className="border-l border-[#786045]/30 pl-6 mt-8 space-y-2 italic">
                <p className="font-bold text-foreground">{t('company_name')}</p>
                <p>{t('company_details')}</p>
                <p>{t('company_address')}</p>
                <p>{t('company_phone')}</p>
                <p>{t('company_email')}</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('usage_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{t('usage_content')}</p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('ip_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{t('ip_content')}</p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('hosting_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{t('hosting_content')}</p>
          </section>

          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('jurisdiction_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{t('jurisdiction_content')}</p>
          </section>
        </div>

        <Link href="/" className="inline-block mt-24 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-foreground/10 pb-2 hover:text-[#786045] hover:border-[#786045] transition-all">
          {t('back')}
        </Link>
      </motion.div>
    </main>
  );
}