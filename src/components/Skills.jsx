'use client'
import { motion } from 'framer-motion';
import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { useLanguage } from '@/context/LanguageContext';

export default function Habilidades() {
  const { language } = useLanguage();

  const texts = {
    es: {
      title: 'Habilidades',
      subtitle:
        'Estas son las herramientas y tecnologías que domino y utilizo en el desarrollo de aplicaciones web.',
    },
    en: {
      title: 'Skills',
      subtitle:
        'These are the tools and technologies I master and use in web application development.',
    },
  };

  const t = texts[language];

  const skills = [
    { name: 'Python', icon: <FaPython size={40} /> },
    { name: 'HTML & CSS', icon: <><FaHtml5 size={20} /><FaCss3Alt size={20} /></> },
    { name: 'JavaScript', icon: <FaJs size={40} /> },
    { name: 'SQL', icon: <FaDatabase size={40} /> },
    { name: 'React', icon: <FaReact size={40} /> },
    { name: 'GitHub', icon: <FaGithub size={40} /> },
    { name: 'Git', icon: <FaGitAlt size={40} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  ];

  return (
    <section id="habilidades" className="py-20 bg-[#E7E3DD] text-[#043353]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Título */}
        <h2
          className="text-3xl font-bold text-center mb-6"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {t.title}
        </h2>

        {/* Subtítulo */}
        <p
          className="text-center max-w-3xl mx-auto text-base md:text-lg mb-12"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {t.subtitle}
        </p>

        {/* Cuadros de habilidades */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white rounded-3xl shadow-md border-2 border-[#043353] p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-3 text-[#BB2649]">{skill.icon}</div>
              <span
                className="text-center text-sm text-[#043353]"
                style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 600 }}
              >
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
