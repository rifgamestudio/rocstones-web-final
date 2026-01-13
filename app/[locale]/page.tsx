'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function HomePage() {
  const tIntro = useTranslations('Intro');
  const tExpertise = useTranslations('Expertise');
  const tAlt = useTranslations('ImagesAlt'); // Inyectamos la traducción para SEO

  return (
    <main className="flex flex-col w-full bg-background text-foreground transition-colors duration-500">
      
      {/* 1. HERO SECTION (CON ICONO DE RATÓN ANIMADO) */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src="/img/fondo.jpg" 
          alt={tAlt('hero')} // SEO ALT DINÁMICO
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* NIEBLA SUPERIOR E INFERIOR */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background via-background/20 to-transparent z-10 transition-colors duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-background via-background/50 to-transparent z-10 transition-colors duration-500" />

        {/* ICONO DE RATÓN ANIMADO (BOTANDO EN BUCLE) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
          <motion.div 
            initial={{ y: 0 }}
            animate={{ y: 12 }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              repeatType: "mirror", 
              ease: "easeInOut" 
            }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1"
          >
            {/* La bolita del ratón que también se mueve */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 bg-[#C4A484] rounded-full"
            />
          </motion.div>
          <span className="text-[8px] uppercase tracking-[0.4em] text-foreground/40 font-bold">Scroll</span>
        </div>
      </section>

      {/* 2. SECCIÓN INTRO */}
      <section className="py-24 md:py-48 px-6 max-w-6xl mx-auto w-full bg-background transition-colors duration-500">
        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 shrink-0 pt-6"
          >
            <div className="w-12 h-[1px] bg-[#C4A484]" />
            <span className="text-[11px] uppercase tracking-[0.5em] text-[#C4A484] font-bold">
              {tIntro('label')}
            </span>
          </motion.div>

          <div className="flex flex-col w-full">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-5xl font-serif italic leading-[1.2] text-foreground mb-12 tracking-tight transition-colors duration-500"
            >
              {tIntro('title')}
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="max-w-md md:self-end border-t border-foreground/10 pt-10 transition-colors duration-500"
            >
              <p className="text-xl md:text-2xl font-serif italic text-gray-400 dark:text-gray-500 leading-relaxed text-right transition-colors duration-500">
                {tIntro('subtitle')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GALERÍA ASIMÉTRICA CON EFECTO AUTO-COLOR PARA MÓVIL */}
      <section className="pb-64 px-6 max-w-7xl mx-auto w-full bg-background transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[1, 2, 3].map((num) => (
            <motion.div 
              key={num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: num * 0.2 }}
              className={`aspect-[3/4] overflow-hidden bg-foreground/5 shadow-2xl shadow-black/5 dark:shadow-black/40 ${num === 2 ? 'md:translate-y-24' : ''} transition-all duration-500`}
            >
              <motion.img 
                src={`/img/${num}.jpg`} 
                alt={tAlt(`gallery${num}`)} // SEO ALT DINÁMICO
                className="w-full h-full object-cover"
                initial={{ filter: "grayscale(100%)" }}
                whileInView={{ filter: "grayscale(0%)" }} 
                whileHover={{ filter: "grayscale(0%)", scale: 1.1 }} 
                viewport={{ amount: 0.5 }} 
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN NUESTROS SERVICIOS (B1, B2, B3) */}
      <section id="services" className="py-32 px-6 bg-background border-t border-foreground/5 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center md:text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-4 block font-bold">Excellence & Maîtrise</span>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground transition-colors duration-500">{tExpertise('title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {/* SERVICIO 01 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-8 group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-foreground/5 shadow-lg">
                <img 
                  src="/img/b1.jpg" 
                  alt={tAlt('service_beton')} // SEO ALT
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#C4A484]">01</span>
                  <div className="h-[1px] flex-grow bg-foreground/10 group-hover:bg-[#C4A484] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif italic text-foreground uppercase tracking-tight transition-colors duration-500">{tExpertise('beton.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm transition-colors duration-500">
                  {tExpertise('beton.desc')}
                </p>
              </div>
            </motion.div>

            {/* SERVICIO 02 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col space-y-8 group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-foreground/5 shadow-lg">
                <img 
                  src="/img/b2.jpg" 
                  alt={tAlt('service_walls')} // SEO ALT
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#C4A484]">02</span>
                  <div className="h-[1px] flex-grow bg-foreground/10 group-hover:bg-[#C4A484] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif italic text-foreground uppercase tracking-tight transition-colors duration-500">{tExpertise('walls.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm transition-colors duration-500">
                  {tExpertise('walls.desc')}
                </p>
              </div>
            </motion.div>

            {/* SERVICIO 03 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col space-y-8 group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-foreground/5 shadow-lg">
                <img 
                  src="/img/b3.jpg" 
                  alt={tAlt('service_micro')} // SEO ALT
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-[#C4A484]">03</span>
                  <div className="h-[1px] flex-grow bg-foreground/10 group-hover:bg-[#C4A484] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif italic text-foreground uppercase tracking-tight transition-colors duration-500">{tExpertise('micro.title')}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-light leading-relaxed text-sm transition-colors duration-500">
                  {tExpertise('micro.desc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}