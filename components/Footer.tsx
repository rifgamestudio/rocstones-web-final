'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  const cities = ["Casablanca", "Rabat", "Marrakech", "Agadir", "Tanger", "Fès", "Oujda", "Meknès", "Tétouan"];

  const socials = [
    { icon: <Facebook size={16} />, href: "https://www.facebook.com/betoncireaumaroc/", label: "Facebook" },
    { icon: <Twitter size={16} />, href: "https://x.com/rocstonesnews", label: "Twitter" },
    { icon: <Instagram size={16} />, href: "https://www.instagram.com/beton_cire_rocstones", label: "Instagram" },
    { icon: <Youtube size={16} />, href: "https://www.youtube.com/@rocstonesconstruction2171", label: "Youtube" },
  ];

  return (
    <footer className="bg-background border-t border-foreground/5 pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* COLUMNA 1: LOGO Y DESCRIPCIÓN */}
          <div className="space-y-8">
            <img src="/img/logo.png" alt="RocStones Maroc" className="h-12 w-auto object-contain" />
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              {t('desc')}
            </p>
          </div>

          {/* COLUMNA 2: ENLACES RÁPIDOS */}
          <div className="space-y-8">
            {/* HEMOS CAMBIADO EL COLOR A #786045 PARA PASAR EL TEST DE CONTRASTE DE GOOGLE */}
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#786045]">{t('links_title')}</h4>
            <nav className="flex flex-col gap-4 text-sm font-light text-gray-600 dark:text-gray-400">
              <Link href="/" className="hover:text-foreground transition-colors">{tNav('home')}</Link>
              <Link href="/services/beton-cire" className="hover:text-foreground transition-colors">{tNav('beton')}</Link>
              <Link href="/services/concrete-walls" className="hover:text-foreground transition-colors">{tNav('walls')}</Link>
              <Link href="/services/micro-ciment" className="hover:text-foreground transition-colors">{tNav('micro')}</Link>
              <Link href="/professionnels" className="hover:text-foreground transition-colors">{tNav('pros')}</Link>
              <Link href="/realisations" className="hover:text-foreground transition-colors">{tNav('realisations')}</Link>
            </nav>
          </div>

          {/* COLUMNA 3: ZONAS DE INTERVENCIÓN */}
          <div className="space-y-8 lg:col-span-2">
            {/* HEMOS CAMBIADO EL COLOR A #786045 PARA PASAR EL TEST DE CONTRASTE DE GOOGLE */}
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-[#786045]">{t('zones_title')}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed mb-6">
              {t('zones_list')}
            </p>
            <div className="flex flex-wrap gap-2">
              {cities.map(city => (
                <span key={city} className="text-[11px] px-3 py-1.5 border border-foreground/10 text-gray-600 dark:text-gray-400 uppercase tracking-widest hover:border-[#C4A484] hover:text-[#C4A484] transition-all cursor-default">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* LÍNEA FINAL CON REDES SOCIALES REALES */}
        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-[11px] text-gray-600 dark:text-gray-400 uppercase tracking-widest font-medium">
            {t('rights')}
          </p>
          <div className="flex gap-6">
             {socials.map((social, idx) => (
               <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={social.label}
                className="text-gray-500 hover:text-[#C4A484] transition-colors duration-300"
               >
                 {social.icon}
               </a>
             ))}
          </div>
        </div>
      </div>
    </footer>
  );
}