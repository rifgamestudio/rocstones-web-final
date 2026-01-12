'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, Variants } from 'framer-motion';

export default function MicroCimentPage() {
  const t = useTranslations('Expertise.micro');
  const tCommon = useTranslations('Common');
  const [activeStep, setActiveStep] = useState(1);

  const refinedFade: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  // 1. Configuración de los pasos con tus imágenes s1, s2, s3, s4
  const steps = [
    { id: 1, title: t('step_1_t'), desc: t('step_1_d'), img: "/img/s1.png" },
    { id: 2, title: t('step_2_t'), desc: t('step_2_d'), img: "/img/s2.png" },
    { id: 3, title: t('step_3_t'), desc: t('step_3_d'), img: "/img/s3.png" },
    { id: 4, title: t('step_4_t'), desc: t('step_4_d'), img: "/img/s4.png" },
  ];

  // Array para las fotos de ventajas p1, p2, p3
  const advImages = ["/img/p1.jpg", "/img/p2.jpg", "/img/p3.jpg"];

  return (
    <main className="flex flex-col w-full bg-background text-foreground transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-background">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2 }} 
          src="/img/b3.jpg" 
          alt="Micro-ciment de luxe" className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/20 z-10" />
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background via-background/20 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/50 to-transparent z-10" />

        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-black/30 backdrop-blur-md px-10 py-8 border border-white/10 shadow-2xl">
            <h1 className="text-white text-4xl md:text-7xl font-serif italic tracking-tight text-center drop-shadow-2xl">{t('title')}</h1>
          </motion.div>
        </div>

        {/* ICONO DE RATÓN ANIMADO (SCROLL) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1"
          >
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#C4A484] rounded-full"
            />
          </motion.div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/60 font-bold">{tCommon('mouse_scroll')}</span>
        </div>
      </section>

      {/* 2. VENTAJAS (Usando p1.jpg, p2.jpg, p3.jpg) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-center text-2xl md:text-4xl font-serif italic mb-20 tracking-widest uppercase">{t('adv_title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((num, index) => (
            <motion.div key={num} variants={refinedFade} initial="initial" whileInView="whileInView" 
              className="relative aspect-[2/3] overflow-hidden group shadow-2xl bg-background"
            >
              <img src={advImages[index]} alt="Advantage" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-8 text-center space-y-6">
                <div className="w-8 h-[1px] bg-[#C4A484]" />
                <h4 className="text-white font-serif text-2xl italic uppercase tracking-tighter">{(t as any)(`adv_${num}_t`)}</h4>
                <p className="text-gray-300 text-sm font-light leading-relaxed">{(t as any)(`adv_${num}_d`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FINITIONS (Usando p4.jpg) */}
      <section className="py-24 px-6 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-square overflow-hidden shadow-2xl bg-background">
            <img src="/img/p4.jpg" alt="Micro-ciment Finish" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-12">
            <div className="space-y-4 text-center md:text-left">
               <span className="text-[10px] uppercase tracking-[0.4em] text-[#C4A484] font-bold">RocStones Finish</span>
               <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">{t('finishes_title')}</h2>
               <p className="text-gray-500 font-light max-w-md">{t('finishes_desc')}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {['mat', 'sat', 'pol', 'ant'].map((f) => (
                <div key={f} className="space-y-4 p-6 bg-background border border-foreground/[0.03] shadow-sm">
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  <h4 className="font-bold text-xs tracking-widest uppercase">{(t as any)(`f_${f}`)}</h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">{(t as any)(`f_${f}_d`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROCESSUS (Tabs con s1, s2, s3, s4) */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full bg-background">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight">{t('proc_title')}</h2>
          <p className="text-gray-500 font-light italic">{t('proc_desc')}</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 min-h-[550px]">
          {/* Lado Izquierdo: Botones */}
          <div className="md:w-1/3 flex flex-col border-l border-gray-100 dark:border-white/10">
            {steps.map((step) => (
              <button key={step.id} onClick={() => setActiveStep(step.id)}
                className={`text-left px-8 py-8 transition-all relative border-l-2 ${activeStep === step.id ? 'border-[#C4A484] bg-foreground/[0.03] font-bold text-foreground' : 'border-transparent text-gray-400 font-light'}`}
              >
                <span className="text-sm tracking-[0.2em] uppercase">{step.title}</span>
              </button>
            ))}
          </div>

          {/* Lado Derecho: Imagen y Texto */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="space-y-8">
                <h3 className="text-3xl font-serif italic uppercase tracking-tighter text-foreground">{steps[activeStep - 1].title}</h3>
                <div className="aspect-video overflow-hidden shadow-2xl bg-foreground/5">
                  <img src={steps[activeStep - 1].img} alt={steps[activeStep - 1].title} className="w-full h-full object-cover" />
                </div>
                <p className="text-lg text-gray-500 dark:text-gray-400 font-light italic border-t border-gray-100 dark:border-white/10 pt-6 leading-relaxed">
                  {steps[activeStep - 1].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN RENOVACIÓN FINAL */}
      <section className="py-20 px-6 max-w-4xl mx-auto w-full text-center border-t border-foreground/5">
        <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-3" >
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1px] bg-[#C4A484]/30" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#C4A484] font-bold uppercase">{tCommon('renovation_title')}</span>
            <div className="w-8 h-[1px] bg-[#C4A484]/30" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif italic drop-shadow-sm leading-tight">{tCommon('renovation_subtitle')}</h2>
          <p className="text-gray-400 dark:text-gray-500 font-light italic text-base leading-relaxed">{tCommon('renovation_desc')}</p>
        </motion.div>
      </section>

    </main>
  );
}