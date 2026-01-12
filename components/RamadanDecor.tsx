'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function RamadanDecor() {
  const t = useTranslations('Common');

  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      
      {/* LUNA CRECIENTE EN LA ESQUINA SUPERIOR DERECHA */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-6 right-6 md:top-10 md:right-12 text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M80 20C70 20 60 30 60 50C60 70 70 80 80 80C50 80 30 60 30 40C30 25 40 15 50 10C35 15 20 30 20 50C20 75 40 95 65 95C80 95 95 85 100 70C90 75 80 75 70 70C60 65 55 55 55 45C55 35 60 25 70 20C75 18 80 18 85 20C83 20 81 20 80 20Z" 
            fill="currentColor"
          />
        </svg>
      </motion.div>

      {/* ESTRELLAS PEQUEÑAS CERCA DE LA LUNA */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2 + i, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute text-[#D4AF37] drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
          style={{
            top: `${10 + (i * 6)}%`,
            right: `${5 + (i * 4)}%`,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* TEXTO VERTICAL DISCRETO EN LA PARTE SUPERIOR DERECHA */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="absolute top-40 right-[-45px] rotate-90 hidden lg:block"
      >
        <span className="text-[10px] uppercase tracking-[1.2em] font-black text-[#D4AF37] drop-shadow-md">
          {t('ramadan_kareem')}
        </span>
      </motion.div>
    </div>
  );
}