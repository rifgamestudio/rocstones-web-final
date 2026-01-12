'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';

export default function ProfessionalsPage() {
  const t = useTranslations('Professionals');
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
      <section className="relative h-[80vh] w-full overflow-hidden bg-background">
        <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 2 }} src="/img/bc1.jpg" alt="Professional Spaces" className="absolute inset-0 w-full h-full object-cover grayscale-[0.3]" />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-background via-background/10 to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className="relative z-20 h-full flex items-center justify-center text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-black/30 backdrop-blur-md px-10 py-12 border border-white/10 shadow-2xl mx-4">
            <h1 className="text-white text-4xl md:text-7xl font-serif italic tracking-tight drop-shadow-2xl uppercase">{t('title')}</h1>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#C4A484] rounded-full" />
          </motion.div>
          <span className="text-[7px] uppercase tracking-[0.4em] text-white/50 font-bold">{tCommon('mouse_scroll')}</span>
        </div>
      </section>

      {/* BLOQUE 1: OPPORTUNITÉ (Texto Izq, Imagen Der) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#C4A484] font-bold">{t('collab_label')}</span>
              <h2 className="text-4xl md:text-6xl font-serif italic leading-tight uppercase">{t('collab_title')}</h2>
              <div className="w-20 h-[1px] bg-foreground/10" />
            </div>
            <p className="text-lg text-gray-500 leading-relaxed font-light">{t('collab_text_1')}</p>
            <p className="text-gray-400 text-sm italic leading-relaxed">{t('collab_text_2')}</p>
          </motion.div>
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="shadow-2xl">
            <img src="/img/pro1.png" alt="Collaboration" className="w-full h-auto object-cover" />
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 2: POURQUOI ROCSTONES (Imagen Izq, Texto Der) */}
      <section className="py-24 px-6 bg-foreground/[0.02] border-y border-foreground/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="shadow-2xl lg:order-1 order-2">
            <img src="/img/pro2.png" alt="Pourquoi RocStones" className="w-full h-auto object-cover" />
          </motion.div>
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-8 lg:order-2 order-1">
            <h2 className="text-4xl md:text-6xl font-serif italic uppercase">{t('why_title')}</h2>
            <div className="w-20 h-[1px] bg-foreground/10" />
            <h4 className="text-xl font-serif italic text-[#C4A484]">{t('why_subtitle')}</h4>
            <p className="text-gray-500 leading-relaxed font-light">{t('why_text_1')}</p>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 3: PARTENAIRE & AVANTAGES (Imagen Arriba, Texto abajo con Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
             <img src="/img/pro3.png" alt="Application Detail" className="w-full h-auto shadow-xl mb-10" />
             <div className="p-8 border border-foreground/5 bg-background space-y-6">
                <h3 className="text-xl font-serif italic">{t('colors_title')}</h3>
                <p className="text-sm text-gray-500 font-light">{t('colors_text')}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484]">{t('finishes_list')}</p>
             </div>
          </div>
          
          <div className="lg:col-span-8 space-y-12">
            <h2 className="text-3xl md:text-5xl font-serif italic border-b border-foreground/10 pb-8">{t('partner_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 text-gray-500 font-light">
              <p>• {t('partner_list_1')}</p>
              <p>• {t('partner_list_2')}</p>
              <p>• {t('partner_list_3')}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
               <div className="space-y-4 p-8 bg-[#C4A484]/5 border border-[#C4A484]/10">
                  <h4 className="font-serif italic text-xl text-[#C4A484]">{t('distribution_title')}</h4>
                  <p className="text-sm text-gray-400">{t('distribution_text')}</p>
               </div>
               <div className="space-y-4 p-8 bg-foreground/5 border border-foreground/10">
                  <h4 className="font-serif italic text-xl">{t('advantages_title')}</h4>
                  <ul className="text-xs space-y-3 text-gray-500">
                    <li>{t('adv_1')}</li>
                    <li>{t('adv_2')}</li>
                    <li>{t('adv_3')}</li>
                    <li>{t('adv_4')}</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTAS FINALES (SECTORES Y CONTACTO) CON IMÁGENES ACTUALIZADAS */}
      <section className="py-20 px-6 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-serif italic mb-16 text-center">{t('sectors_title')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { id: 'gym', img: 'p5.jpg' },
              { id: 'hotel', img: 'p6.jpg' },
              { id: 'office', img: 'p7.jpg' },
              { id: 'retail', img: 'p8.jpg' }
            ].map((sector) => (
              <div key={sector.id} className="flex flex-col items-center text-center space-y-4">
                <div className="w-full aspect-square bg-background border border-foreground/5 shadow-sm overflow-hidden group">
                   <img 
                    src={`/img/${sector.img}`} 
                    alt={sector.id} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x600?text=" + sector.id }} 
                   />
                </div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#C4A484]">{t(sector.id)}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-8">
          <h3 className="text-3xl md:text-5xl font-serif italic">{t('support_title')}</h3>
          <p className="text-gray-500 font-light leading-relaxed text-lg italic">{t('support_desc')}</p>
          <div className="pt-10">
            <button className="bg-foreground text-background px-12 py-5 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#C4A484] hover:text-white transition-all duration-500 rounded-full">Contact Technique</button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}