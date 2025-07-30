'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { motion } from 'framer-motion'

export default function AboutMe() {
    const { language } = useLanguage()

    const texts = {
        es: {
            title: 'Sobre mí',
            paragraph1:
                'Soy desarrolladora de software con pasión por el frontend y el diseño de interfaces. Me encanta crear experiencias digitales funcionales y atractivas, aplicando tecnologías del lado del cliente.',
            paragraph2:
                'Destaco por mi iniciativa, liderazgo y pensamiento crítico, cualidades que me permiten adaptarme y trabajar en equipo.',
            paragraph3:
                'Mi meta es desarrollar soluciones tecnológicas que mejoren la vida de las personas, especialmente de adultos mayores, promoviendo la accesibilidad y el bienestar.',
        },
        en: {
            title: 'About Me',
            paragraph1:
                'I’m a software developer with a passion for frontend and interface design. I enjoy creating functional and visually appealing digital experiences using client-side technologies.',
            paragraph2:
                'I’m known for my initiative, leadership, and critical thinking, which help me adapt quickly and collaborate efficiently in teams.',
            paragraph3:
                'My goal is to create technology that improves people’s lives, especially older adults, by promoting accessibility and well-being through digital solutions.',
        },
    }

    const t = texts[language]

    return (
        <section id="sobremi" className="bg-[#d8d5cf] text-[#043353] py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                {/* Imagen a la izquierda */}
                <div className="flex justify-center">
                    <Image
                        src="/assets/samanta-avatar.png"
                        alt="Samanta illustration"
                        width={350}
                        height={350}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Texto a la derecha */}
                <div>
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ amount: 0.8 }} // activa la animación cuando 60% del elemento está visible
                    >
                        {t.title}
                    </motion.h2>


                    <motion.p
                        className="mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {t.paragraph1}
                    </motion.p>

                    <motion.p
                        className="mb-4"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {t.paragraph2}
                    </motion.p>

                    <motion.p
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: false, amount: 0.5 }}
                    >
                        {t.paragraph3}
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
