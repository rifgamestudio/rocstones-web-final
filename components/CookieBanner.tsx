'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations('Legal');

  useEffect(() => {
    // Comprobamos si ya aceptó las cookies anteriormente
    const consent = localStorage.getItem('rocstones-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('rocstones-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full z-[200] p-6"
        >
          <div className="max-w-5xl mx-auto bg-white dark:bg-[#1a1a1a] border border-foreground/10 p-8 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] leading-relaxed">
                {t('cookie_banner_message')} 
                <Link href="/cookies" className="underline ml-2 hover:text-[#786045] transition-colors">
                  {t('cookies_title')}
                </Link>
              </p>
            </div>
            <div className="flex gap-4 shrink-0 w-full md:w-auto">
              <button 
                onClick={acceptCookies}
                className="flex-1 md:flex-none bg-[#786045] text-white text-[10px] font-bold uppercase px-10 py-4 tracking-[0.3em] hover:bg-[#634f39] transition-all"
              >
                {t('accept_button')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}