'use client'

import { Typewriter } from 'react-simple-typewriter'
import { useLanguage } from '@/context/LanguageContext'

export default function Home() {
  const { language } = useLanguage()

  const texts = {
    es: {
      greeting: 'Hola! Soy',
      description:
        'Soy desarrolladora web apasionada por crear experiencias digitales elegantes, funcionales y adaptadas a tus necesidades.',
      cv: 'CV',
      linkedin: 'LinkedIn',
    },
    en: {
      greeting: 'Hi! I\'m',
      description:
        'I\'m a web developer passionate about creating elegant, functional, and tailored digital experiences.',
      cv: 'Resume',
      linkedin: 'LinkedIn',
    },
  }

  return (
    <section id="inicio" className="bg-[#E7E3DD] text-[#043353] py-20 mt-45">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Izquierda */}
        <div>
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {texts[language].greeting} <br />
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
            className="text-base mb-6 max-w-md"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            {texts[language].description}
          </p>

          <div className="flex gap-4">
            <a
              href="/SamantaToroño-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#043353] text-white rounded hover:bg-[#BB2649] transition"
            >
              {texts[language].cv}
            </a>
            <a
              href="https://www.linkedin.com/in/samanta-toru%C3%B1o-08835436b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-[#043353] text-[#043353] rounded hover:bg-[#043353] hover:text-white transition"
            >
              {texts[language].linkedin}
            </a>
          </div>
        </div>

        {/* Derecha */}
        <div className="flex justify-center">
          <img
            src="/avatar.png"
            alt="Samanta icon"
            className="w-60 h-60 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
