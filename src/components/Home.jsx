'use client'

import { useState } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { useLanguage } from '@/context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'

export default function Home() {
  const { language } = useLanguage()
  const [showSocials, setShowSocials] = useState(false)

  const texts = {
    es: {
      greeting: '¡Hola! Soy',
      description:
        'Desarrolladora de software enfocada en la creación de aplicaciones web y de escritorio, con especialización en desarrollo Front-End.',
      cv: 'CV',
      linkedin: 'LinkedIn',
    },
    en: {
      greeting: "Hi! I'm",
      description:
        'Software developer focused on building web and desktop applications, with a specialization in Front-End development.',
      cv: 'Resume',
      linkedin: 'LinkedIn',
    },
  }

  const t = texts[language]

  return (
    <section id="inicio" className="bg-[#E7E3DD] text-[#043353] py-15 mt-30">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Izquierda */}
        <div>
          <h1
            className="text-4xl font-bold mb-9"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {t.greeting} <br />
            <span className="text-[#BB2649]">
              <Typewriter
                words={['Samanta Toruño']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={90}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p
            className="text-lg md:text-xl mb-8 max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {t.description}
          </p>

          {/* Botones */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex gap-4">
              <a
                href={language === 'es' ? '/assets/CVSamantaESP.pdf' : '/assets/CVSamantaENG.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#043353] text-white rounded hover:bg-[#BB2649] transition"
              >
                {t.cv}
              </a>

              <a
                href="https://www.linkedin.com/in/samanta-toru%C3%B1o-08835436b"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#043353] text-[#043353] rounded hover:bg-[#043353] hover:text-white transition"
              >
                {t.linkedin}
              </a>
            </div>

            {/* Botón redondo con flecha y redes */}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => setShowSocials(prev => !prev)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#043353] text-white hover:bg-[#BB2649] transition"
              >
                <span
                  className={`transform transition-transform duration-300 ${
                    showSocials ? 'rotate-90' : ''
                  }`}
                >
                  →
                </span>
              </button>

              <AnimatePresence>
                {showSocials && (
                  <motion.div
                    className="flex gap-4 ml-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <a
                      href="https://github.com/SammyToruno11"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#043353] hover:text-[#BB2649] text-xl"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/samanta-toru%C3%B1o-08835436b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#043353] hover:text-[#BB2649] text-xl"
                    >
                      <FaLinkedin />
                    </a>

                     <a
                      href="mailto:samytoruno19@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#043353] hover:text-[#BB2649] text-xl"
                    >
                      <FaEnvelope />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Derecha */}
        <div className="flex justify-center mt-6 md:mt-0">
          <img
            src="/assets/yo.jpeg"
            alt="Samanta icon"
            className="w-40 h-40 md:w-60 md:h-60 lg:w-72 lg:h-72 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
