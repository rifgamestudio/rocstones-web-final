'use client';

import { useTranslations } from 'next-intl';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link'; // Importamos Link para una navegación más rápida

export default function RealisationsPage() {
  const t = useTranslations('RealisationsPage');
  const tCommon = useTranslations('Common');

  const refinedFade: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  // Estructura actualizada con 7 proyectos
  const projects = [
    { id: 'p1', images: ['/img/r1-1.jpg', '/img/r1-2.jpg', '/img/r1-3.jpg'] },
    { id: 'p2', images: ['/img/r2-1.jpg', '/img/r2-2.jpg', '/img/r2-3.jpg'] },
    { id: 'p3', images: ['/img/r3-1.jpg', '/img/r3-2.jpg', '/img/r3-3.jpg'] },
    { id: 'p4', images: ['/img/r4-1.jpg', '/img/r4-2.jpg', '/img/r4-3.jpg'] },
    { id: 'p5', images: ['/img/r5-1.jpg', '/img/r5-2.jpg', '/img/r5-3.jpg'] },
    { id: 'p6', images: ['/img/r6-1.jpg', '/img/r6-2.jpg', '/img/r6-3.jpg'] },
    { id: 'p7', images: ['/img/r7-1.jpg', '/img/r7-2.jpg', '/img/r7-3.jpg'] }, // SÉPTIMO PROYECTO AÑADIDO
  ];

  return (
    <main className="flex flex-col w-full bg-background text-foreground transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-background flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-foreground/[0.02]" />
        
        <div className="relative z-20 text-center px-6 pt-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif italic mb-4 tracking-tight uppercase"
          >
            {t('title')}
          </motion.h1>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl italic text-base md:text-lg leading-relaxed mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* ICONO RATÓN ANIMADO */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-foreground/30 rounded-full flex justify-center p-1"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-[#C4A484] rounded-full"
            />
          </motion.div>
          <span className="text-[7px] uppercase tracking-[0.4em] text-foreground/40 font-bold">
            {tCommon('mouse_scroll')}
          </span>
        </div>
      </section>

      {/* 2. LISTADO DE PROYECTOS */}
      <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto w-full space-y-24">
        {projects.map((project, index) => (
          <motion.div 
            key={project.id}
            variants={refinedFade}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 items-center`}
          >
            <div className="lg:w-2/3 w-full">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-8 overflow-hidden bg-background shadow-2xl">
                  <img 
                    src={project.images[0]} 
                    alt="Main" 
                    className="w-full h-[350px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-[3s]" 
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x800?text=Project+Photo" }} 
                  />
                </div>
                <div className="col-span-4 space-y-3 pt-8 md:pt-12">
                  <div className="overflow-hidden bg-background shadow-xl">
                    <img 
                      src={project.images[1]} 
                      alt="Detail 1" 
                      className="w-full h-24 md:h-44 object-cover" 
                    />
                  </div>
                  <div className="overflow-hidden bg-background shadow-xl">
                    <img 
                      src={project.images[2]} 
                      alt="Detail 2" 
                      className="w-full h-24 md:h-44 object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full space-y-4">
              <div className="space-y-1 text-center lg:text-left">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C4A484] font-bold">Project 0{index + 1}</span>
                <h2 className="text-3xl md:text-5xl font-serif italic text-foreground tracking-tight drop-shadow-sm">
                  {(t as any)(`projects.${project.id}.name`)}
                </h2>
              </div>
              
              <div className="pt-4 border-t border-foreground/5 space-y-3">
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-medium">
                  <span className="text-gray-400">{t('project_location')}</span>
                  <span className="text-foreground">{(t as any)(`projects.${project.id}.loc`)}</span>
                </div>
                <div className="flex justify-between text-[9px] uppercase tracking-widest font-medium">
                  <span className="text-gray-400">{t('project_type')}</span>
                  <span className="text-foreground">{(t as any)(`projects.${project.id}.type`)}</span>
                </div>
              </div>

              <p className="text-sm text-gray-400 font-light leading-relaxed italic pt-2 text-center lg:text-left">
                 {t('project_desc')}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. CTA FINAL */}
      <section className="py-20 px-6 text-center bg-foreground/[0.01] border-t border-foreground/5">
        <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="max-w-2xl mx-auto space-y-6">
           <h3 className="text-3xl md:text-5xl font-serif italic drop-shadow-sm">
             {t('cta_title')}
           </h3>
           <div className="pt-4">
             <Link href="/contact" className="inline-block bg-foreground text-background px-10 py-4 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#C4A484] hover:text-white transition-all duration-500 rounded-full shadow-lg">
                {t('cta_button')}
             </Link>
           </div>
        </motion.div>
      </section>

    </main>
  );
}