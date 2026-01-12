'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Clock, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');
  const tCommon = useTranslations('Common');

  // Lógica de estado para el envío del formulario
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('SENDING');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // ACTUALIZADO CON TU NUEVO ID: xykkypzj
      const response = await fetch('https://formspree.io/f/xykkypzj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  const refinedFade: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/betoncireaumaroc/" },
    { icon: <Twitter size={20} />, href: "https://x.com/rocstonesnews" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/beton_cire_rocstones" },
    { icon: <Youtube size={20} />, href: "https://www.youtube.com/@rocstonesconstruction2171" },
  ];

  return (
    <main className="flex flex-col w-full bg-background text-foreground transition-colors duration-500 font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-foreground/[0.03]" />
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif italic mb-6 tracking-tight"
          >
            {t('title')}
          </motion.h1>
          <p className="text-gray-500 dark:text-gray-400 font-light max-w-xl italic text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* 2. FORMULARIO E INFO */}
      <section className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* INFORMACIÓN DE CONTACTO */}
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-serif italic border-l-2 border-[#C4A484] pl-6">{t('info_title')}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                  <MapPin size={20} className="text-[#C4A484]" />
                  <span className="text-sm uppercase tracking-widest">{t('address')}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                  <Clock size={20} className="text-[#C4A484]" />
                  <span className="text-sm uppercase tracking-widest">{t('hours')}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">{t('social_title')}</h4>
              <div className="flex gap-6">
                {socialLinks.map((link, idx) => (
                  <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-[#C4A484] transition-colors">
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/212661344442" 
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                <MessageCircle size={18} />
                {t('whatsapp')}
              </a>
              <a 
                href="mailto:contact@rocstones.ma"
                className="flex items-center justify-center gap-3 bg-foreground text-background px-8 py-5 rounded-full font-bold text-[10px] uppercase tracking-widest hover:bg-[#C4A484] hover:text-white transition-all shadow-xl"
              >
                <Mail size={18} />
                E-mail Direct
              </a>
            </div>
          </motion.div>

          {/* FORMULARIO CONECTADO A FORMSPREE */}
          <motion.div variants={refinedFade} initial="initial" whileInView="whileInView" className="bg-foreground/[0.02] p-8 md:p-12 border border-foreground/5 shadow-2xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {status === 'SUCCESS' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20 space-y-4"
                >
                  <div className="w-16 h-16 bg-[#C4A484] rounded-full flex items-center justify-center text-white mb-4">
                    <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2 }}>✓</motion.span>
                  </div>
                  <h3 className="text-2xl font-serif italic text-foreground">Merci !</h3>
                  <p className="text-gray-500 text-sm">Votre message a été envoyé avec succès.<br/>Nous vous recontacterons dans les plus brefs délais.</p>
                  <button 
                    onClick={() => setStatus('IDLE')}
                    className="mt-6 text-[10px] uppercase tracking-widest font-bold text-[#C4A484] underline"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('form_name')}</label>
                    <input required name="Nom Complet" type="text" className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-[#C4A484] outline-none transition-colors text-sm" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('form_email')}</label>
                      <input required name="Email" type="email" className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-[#C4A484] outline-none transition-colors text-sm" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('form_phone')}</label>
                      <input required name="Telephone" type="tel" className="w-full bg-transparent border-b border-foreground/10 py-3 focus:border-[#C4A484] outline-none transition-colors text-sm" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">{t('form_message')}</label>
                    <textarea required name="Message" rows={4} className="w-full bg-transparent border border-foreground/10 p-4 focus:border-[#C4A484] outline-none transition-colors resize-none text-sm"></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={status === 'SENDING'}
                    className="w-full bg-[#C4A484] text-white py-5 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black transition-all shadow-lg disabled:opacity-50"
                  >
                    {status === 'SENDING' ? 'ENVOI EN COURS...' : t('form_button')}
                  </button>

                  {status === 'ERROR' && (
                    <p className="text-red-500 text-[10px] uppercase text-center font-bold tracking-widest">
                      Une erreur est survenue. Veuillez réessayer.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}