'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  // Detectar scroll para aplicar sombra
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 transition-shadow ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      } bg-[#E7E3DD] text-[#043353]`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio">
          <img
            src="/assets/logoSamantaBck.png"
            alt="Logo Samanta"
            className="w-14 h-14 object-contain hover:scale-105 transition"
          />
        </a>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 text-sm font-medium">
            <li><a href="#inicio" className="relative group">{language === 'es' ? 'Inicio' : 'Home'}<span className="absolute left-0 bottom-[-2px] h-[1px] w-0 bg-[#BB2649] transition-all group-hover:w-full"></span></a></li>
            <li><a href="#sobremi" className="hover:text-[#BB2649]">{language === 'es' ? 'Sobre mí' : 'About'}</a></li>
            <li><a href="#habilidades" className="hover:text-[#BB2649]">{language === 'es' ? 'Habilidades' : 'Skills'}</a></li>
            <li><a href="#proyectos" className="hover:text-[#BB2649]">{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
            <li><a href="#contacto" className="hover:text-[#BB2649]">{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
          </ul>

          {/* Botón de idioma */}
          <button
            onClick={toggleLanguage}
            className="relative w-12 h-6 bg-[#043353] rounded-full flex items-center px-1 transition-all duration-300"
            aria-label="Cambiar idioma"
          >
            <div
              className={`w-4 h-4 bg-[#E7E3DD] rounded-full shadow-md transform transition-all duration-300 ${
                language === 'es' ? 'translate-x-0' : 'translate-x-6'
              }`}
            />
          </button>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#043353]"
          aria-label="Abrir menú"
        >
          {menuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
        </button>
      </nav>

      {/* Menú móvil con animación */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#E7E3DD] px-6 py-8 text-center"
          >
            <ul className="flex flex-col items-center gap-6 text-lg font-semibold">
              <li><a href="#inicio" onClick={() => setMenuOpen(false)}>{language === 'es' ? 'Inicio' : 'Home'}</a></li>
              <li><a href="#sobremi" onClick={() => setMenuOpen(false)}>{language === 'es' ? 'Sobre mí' : 'About'}</a></li>
              <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>{language === 'es' ? 'Habilidades' : 'Skills'}</a></li>
              <li><a href="#proyectos" onClick={() => setMenuOpen(false)}>{language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
              <li><a href="#contacto" onClick={() => setMenuOpen(false)}>{language === 'es' ? 'Contacto' : 'Contact'}</a></li>
            </ul>

            {/* Botón idioma móvil */}
            <div className="flex justify-center mt-6">
              <button
                onClick={toggleLanguage}
                className="relative w-12 h-6 bg-[#043353] rounded-full flex items-center px-1 transition-all duration-300"
                aria-label="Cambiar idioma"
              >
                <div
                  className={`w-4 h-4 bg-[#E7E3DD] rounded-full shadow-md transform transition-all duration-300 ${
                    language === 'es' ? 'translate-x-0' : 'translate-x-6'
                  }`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
