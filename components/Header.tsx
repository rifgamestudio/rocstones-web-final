'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Sun, Moon, ChevronDown } from 'lucide-react'; 
import { useTheme } from 'next-themes';   

export default function Header() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false); // Dropdown PC
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Acordeón Móvil
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!mounted) return null; 

  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  // Definición de los sub-servicios
  const serviceItems = [
    { name: t('beton'), href: '/services/beton-cire' },
    { name: t('walls'), href: '/services/concrete-walls' },
    { name: t('micro'), href: '/services/micro-ciment' },
  ];

  const navLinks = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '#services' },
    { name: t('realisations'), href: '/realisations' }, 
    { name: t('pros'), href: '/professionnels' }, 
    { name: t('contact'), href: '/contact' },
  ];

  const menuVariants: Variants = {
    closed: { 
      opacity: 0, 
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
    },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.5, ease: "easeOut" }
    })
  };

  const dropdownVariants: Variants = {
    closed: { opacity: 0, y: 10, transition: { duration: 0.2 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <>
      <header className="fixed top-0 w-full z-[100] bg-white/90 dark:bg-[#121212]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          
          {/* LOGO */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 md:gap-4 shrink-0 relative z-[110]"
          >
            <img 
              src="/img/logo.png" 
              alt="RocStones" 
              className="h-10 md:h-16 w-auto object-contain transition-transform hover:scale-105 duration-500" 
            />
            <div className="h-6 md:h-8 w-[1px] bg-gray-200 dark:bg-white/20 mx-1 md:mx-2 hidden xs:block" />
            <span className="text-[9px] md:text-[11px] tracking-[0.4em] text-gray-500 dark:text-gray-400 font-light uppercase mt-1">
              Maroc
            </span>
          </motion.div>

          {/* NAVEGACIÓN DESKTOP */}
          <nav className="hidden lg:flex items-center gap-10 text-[10px] uppercase tracking-[0.25em] font-bold text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-black dark:hover:text-white transition-all relative group text-center">
              {t('home')}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all group-hover:w-full" />
            </Link>

            <div 
              className="relative h-24 flex items-center"
              onMouseEnter={() => setIsServicesHovered(true)}
              onMouseLeave={() => setIsServicesHovered(false)}
            >
              <button className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-all uppercase tracking-[0.25em]">
                {t('services')} 
                <ChevronDown size={12} className={`transition-transform duration-300 ${isServicesHovered ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesHovered && (
                  <motion.div 
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute top-[80%] left-0 w-56 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl border border-gray-100 dark:border-white/10 shadow-2xl py-5 flex flex-col z-[120]"
                  >
                    {serviceItems.map((item) => (
                      <Link 
                        key={item.name} 
                        href={item.href}
                        className="px-7 py-3 text-[11px] tracking-widest text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/realisations" className="hover:text-black dark:hover:text-white transition-all relative group text-center">
              {t('realisations')}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all group-hover:w-full" />
            </Link>

            <Link href="/professionnels" className="hover:text-black dark:hover:text-white transition-all relative group text-center">
              {t('pros')}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all group-hover:w-full" />
            </Link>
            <Link href="/contact" className="hover:text-black dark:hover:text-white transition-all relative group text-center">
              {t('contact')}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black dark:bg-white transition-all group-hover:w-full" />
            </Link>
          </nav>

          {/* SELECTOR IDIOMAS + MODO OSCURO */}
          <div className="flex items-center gap-6 relative z-[110]">
            
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300"
              aria-label="Cambiar tema"
            >
              <motion.div initial={false} animate={{ rotate: theme === 'dark' ? 180 : 0 }}>
                {theme === 'dark' ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-black" />
                )}
              </motion.div>
            </button>

            <div className="hidden sm:flex items-center gap-4 text-[10px] font-black uppercase tracking-widest">
              {['fr', 'en', 'es', 'de', 'nl'].map((lang) => (
                <Link 
                  key={lang} 
                  href={redirectedPathname(lang)} 
                  className={`${
                    pathname.startsWith(`/${lang}`) 
                    ? 'text-black dark:text-white underline underline-offset-8 decoration-1' 
                    : 'text-gray-400 dark:text-gray-600'
                  } transition-colors hover:text-black dark:hover:text-white`}
                >
                  {lang}
                </Link>
              ))}
            </div>

            {/* BOTÓN BURGER MÓVIL - HEMOS AÑADIDO EL ARIA-LABEL PARA EL 100% DE SEO */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8 focus:outline-none"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-full h-[1px] bg-black dark:bg-white block"
              />
              <motion.span 
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[1px] bg-black dark:bg-white block"
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-[1px] bg-black dark:bg-white block"
              />
            </button>
          </div>
        </div>
      </header>

      {/* MENÚ MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white dark:bg-[#121212] z-[90] flex flex-col justify-center items-center px-10 overflow-y-auto"
          >
            <nav className="flex flex-col gap-8 text-center w-full py-20">
              <motion.div variants={linkVariants} custom={0}>
                <Link href="/" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-black dark:text-white">{t('home')}</Link>
              </motion.div>

              <motion.div variants={linkVariants} custom={1} className="flex flex-col gap-4">
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="text-4xl font-serif italic flex items-center justify-center gap-2 text-black dark:text-white"
                >
                  {t('services')} <ChevronDown size={24} className={`transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="flex flex-col gap-4 overflow-hidden"
                    >
                      {serviceItems.map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="text-xl text-gray-500 dark:text-gray-400 font-sans tracking-widest uppercase">
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div variants={linkVariants} custom={2}>
                <Link href="/realisations" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-black dark:text-white">{t('realisations')}</Link>
              </motion.div>

              <motion.div variants={linkVariants} custom={3}>
                <Link href="/professionnels" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-black dark:text-white">{t('pros')}</Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={4}>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-4xl font-serif italic text-black dark:text-white">{t('contact')}</Link>
              </motion.div>
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6 mt-10 border-t border-gray-100 dark:border-white/10 pt-10 px-6"
            >
              {['fr', 'en', 'es', 'de', 'nl'].map((lang) => (
                <Link 
                  key={lang} 
                  href={redirectedPathname(lang)} 
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-black uppercase tracking-widest ${
                    pathname.startsWith(`/${lang}`) ? 'text-black dark:text-white' : 'text-gray-400'
                  }`}
                >
                  {lang}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}