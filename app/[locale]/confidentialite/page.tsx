'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Confidentialite() {
  const t = useTranslations('Legal');
  return (
    <main className="pt-40 pb-32 px-6 max-w-4xl mx-auto min-h-screen bg-background transition-colors duration-500">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1 className="text-4xl md:text-5xl font-serif italic mb-16 text-foreground tracking-tight">{t('privacy_title')}</h1>
        
        <div className="space-y-20">
          {/* 1. TRAITEMENT DES DONNÉES */}
          <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('treatment_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">{t('treatment_content')}</p>
          </section>

          {/* 2. VOS DROITS (Aquí ya se incluye la mención a la CNDP) */}
          <section className="bg-foreground/5 p-10 border border-foreground/5">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#786045] mb-8">{t('rights_subtitle')}</h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">{t('rights_content')}</p>
            <p className="text-sm text-gray-500 italic">{t('privacy_title')} - {t('company_name')}</p>
          </section>
        </div>

        <Link href="/" className="inline-block mt-24 text-[10px] uppercase tracking-[0.4em] font-bold border-b border-foreground/10 pb-2 hover:text-[#786045] hover:border-[#786045] transition-all">
          {t('back')}
        </Link>
      </motion.div>
    </main>
  );
}