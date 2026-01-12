'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

export default function ConcreteWallsPage() {
  const t = useTranslations('Expertise.walls');
  const tCommon = useTranslations('Common');

  const refinedFade: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <main className="flex flex-col w-full bg-background text-foreground transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-background">
        <motion.img 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          src="/img/bc.jpg" 
          alt="Concrete Walls Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/10 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />

        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/30 backdrop-blur-md px-8 py-6 md:px-16 md:py-10 border border-white/10 shadow-2xl"
          >
            <h1 className="text-white text-4xl md:text-7xl font-serif italic tracking-tight text-center drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]">
              {t('title')}
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#C4A484] rounded-full" />
          </motion.div>
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/50 font-bold">{tCommon('mouse_scroll')}</span>
        </div>
      </section>

      {/* 2. INTRO EDITORIAL (TRADUCIDA) */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-16">
          <div className="flex items-center gap-3 shrink-0 pt-3">
            <div className="w-8 h-[1px] bg-[#C4A484]" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C4A484] font-bold">
              {t('intro_label')}
            </span>
          </div>
          <div className="flex flex-col w-full">
            <motion.h2 
              variants={refinedFade} initial="initial" whileInView="whileInView"
              className="text-3xl md:text-5xl lg:text-5xl font-serif italic leading-tight text-foreground mb-6 tracking-tight"
            >
              {t('intro_title')}
            </motion.h2>
            <motion.div 
              variants={refinedFade} initial="initial" whileInView="whileInView"
              className="max-w-md md:self-end border-t border-foreground/10 pt-4"
            >
              <p className="text-lg md:text-xl font-serif italic text-gray-400 text-right leading-relaxed">
                {t('desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. BLOQUES DE INFORMACIÓN TÉCNICA */}
      <section className="py-16 px-6 bg-foreground/[0.02] border-y border-foreground/5 transition-colors duration-500">
        <div className="max-w-6xl mx-auto space-y-24">
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <h3 className="text-3xl font-serif italic drop-shadow-sm">{t('what_title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-base">{t('what_text')}</p>
          </motion.div>

          <div className="space-y-12">
            <motion.h3 variants={refinedFade} initial="initial" whileInView="whileInView" className="text-3xl font-serif italic text-center drop-shadow-sm">{t('why_title')}</motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-3 p-6 border border-foreground/5 bg-background">
                <h4 className="text-[#C4A484] font-bold text-xs uppercase tracking-widest">{t('why_durability')}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{t('why_durability_text')}</p>
              </motion.div>
              <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" transition={{delay: 0.1}} className="space-y-3 p-6 border border-foreground/5 bg-background">
                <h4 className="text-[#C4A484] font-bold text-xs uppercase tracking-widest">{t('why_aesthetic')}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{t('why_aesthetic_text')}</p>
              </motion.div>
              <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" transition={{delay: 0.2}} className="space-y-3 p-6 border border-foreground/5 bg-background">
                <h4 className="text-[#C4A484] font-bold text-xs uppercase tracking-widest">{t('why_app')}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light leading-relaxed">{t('why_app_text')}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MOTIFS SECTION & GALERÍA LARGA (bc2.jpg, bc4.jpg) */}
      <section className="py-20 px-6 max-w-6xl mx-auto w-full">
        <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h3 className="text-3xl font-serif italic drop-shadow-sm">{t('motifs_title')}</h3>
          <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed">{t('motifs_text')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 md:px-20">
          <motion.div 
            variants={refinedFade} initial="initial" whileInView="whileInView"
            className="aspect-[9/16] relative bg-background shadow-2xl overflow-hidden group"
          >
            <img src="/img/bc2.jpg" alt="Pattern 1" className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" />
          </motion.div>
          <motion.div 
            variants={refinedFade} initial="initial" whileInView="whileInView" transition={{delay: 0.2}}
            className="aspect-[9/16] relative bg-background shadow-2xl overflow-hidden group md:mt-24"
          >
            <img src="/img/bc4.jpg" alt="Pattern 2" className="w-full h-full object-cover transition-transform duration-[4s] group-hover:scale-105" />
          </motion.div>
        </div>
      </section>

      {/* 5. SECCIÓN RENOVACIÓN FINAL */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center border-t border-foreground/5">
        <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-3" >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#C4A484]/30" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C4A484] font-bold">{tCommon('renovation_title')}</span>
            <div className="w-8 h-[1px] bg-[#C4A484]/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic drop-shadow-sm">{tCommon('renovation_subtitle')}</h2>
          <p className="text-gray-400 dark:text-gray-500 font-light italic text-base leading-relaxed">
            {tCommon('renovation_desc')}
          </p>
        </motion.div>
      </section>

    </main>
  );
}