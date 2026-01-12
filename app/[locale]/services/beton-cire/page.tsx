'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

export default function BetonCirePage() {
  const t = useTranslations('Expertise.beton');
  const tIntro = useTranslations('Intro');
  const tCommon = useTranslations('Common');
  const tWhy = useTranslations('WhyBeton');

  // Animación refinada: Aparición suave sin efectos agresivos
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
          src="/img/bc1.jpg" 
          alt="Béton Ciré Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Niebla superior e inferior */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/10 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />

        {/* TÍTULO CON SOPORTE VISUAL PROFESIONAL */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black/20 backdrop-blur-md px-8 py-6 md:px-16 md:py-10 border border-white/10"
          >
            <h1 className="text-white text-4xl md:text-7xl font-serif italic tracking-tight text-center drop-shadow-xl">
              {t('title')}
            </h1>
          </motion.div>
        </div>

        {/* ICONO RATÓN */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-1.5 bg-[#C4A484] rounded-full" />
          </motion.div>
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/50 font-bold">{tCommon('mouse_scroll')}</span>
        </div>
      </section>

      {/* 2. INTRO EDITORIAL (ESPACIOS COMPACTADOS) */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 mb-8">
          <div className="flex items-center gap-3 shrink-0 pt-3">
            <div className="w-8 h-[1px] bg-[#C4A484]" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C4A484] font-bold">{tIntro('label')}</span>
          </div>
          <div className="flex flex-col w-full">
            <motion.h2 
              variants={refinedFade} initial="initial" whileInView="whileInView"
              className="text-3xl md:text-5xl lg:text-5xl font-serif italic leading-tight text-foreground mb-6 tracking-tight"
            >
              {tIntro('title')}
            </motion.h2>
            <motion.div 
              variants={refinedFade} initial="initial" whileInView="whileInView"
              className="max-w-md md:self-end border-t border-foreground/10 pt-4"
            >
              <p className="text-lg md:text-xl font-serif italic text-gray-400 text-right leading-relaxed">
                {tIntro('subtitle')}
              </p>
            </motion.div>
          </div>
        </div>

        {/* 3. IMÁGENES (CORREGIDAS SIN RAYAS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-8">
          <motion.div 
            variants={refinedFade} initial="initial" whileInView="whileInView"
            className="group"
          >
            <div className="aspect-[4/5] relative bg-background shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <img src="/img/bc1-1.jpg" alt="Detail 1" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            </div>
          </motion.div>
          
          <motion.div 
            variants={refinedFade} initial="initial" whileInView="whileInView"
            className="group md:mt-16"
          >
            <div className="aspect-[4/5] relative bg-background shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              <img src="/img/bc1-2.jpg" alt="Detail 2" className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. BLOQUE INFORMATIVO (BOTÓN ELIMINADO) */}
      <section className="py-16 px-6 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <div className="space-y-4">
            <span className="text-[8px] uppercase tracking-[0.5em] text-[#C4A484] font-bold">Élégance</span>
            <h3 className="text-2xl md:text-3xl font-serif italic">{t('charme_title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-base">{t('charme_text')}</p>
          </div>
          <div className="space-y-4 md:pt-8">
            <h3 className="text-2xl md:text-3xl font-serif italic">{t('avantages_title')}</h3>
            <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-base">{t('avantages_text')}</p>
            {/* El botón ha sido eliminado para limpiar el diseño visual */}
          </div>
        </div>
      </section>

      {/* 5. POR QUÉ ELEGIRNOS */}
      <section className="py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-serif italic mb-3">{tWhy('title')}</h2>
           <div className="w-12 h-[1px] bg-[#C4A484] mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num) => (
            <motion.div key={num} variants={refinedFade} initial="initial" whileInView="whileInView" className="text-center space-y-3 p-6 border border-foreground/[0.03] hover:bg-foreground/[0.01] transition-colors">
              <h4 className="text-lg font-serif italic text-[#C4A484]">
                {(tWhy as any)(`item${num}_title`)}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm">
                {(tWhy as any)(`item${num}_desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. SECCIÓN RENOVACIÓN */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full text-center border-t border-foreground/5">
        <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-3" >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#C4A484]/30" />
            <span className="text-[9px] uppercase tracking-[0.5em] text-[#C4A484] font-bold">{tCommon('renovation_title')}</span>
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