'use client';

import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const texts = {
    es: {
      portfolio: "Portafolio",
      contact: "Contacto",
      redes: "Redes",
      email: "Correo",
      phone: "Teléfono",
      github: "GitHub",
      linkedin: "LinkedIn",
      form: "Formulario",
      slogan: "Innovar con propósito",
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      projects: "Proyectos",
    },
    en: {
      portfolio: "Portfolio",
      contact: "Contact",
      redes: "Socials",
      email: "Email",
      phone: "Phone",
      github: "GitHub",
      linkedin: "LinkedIn",
      form: "Form",
      slogan: "Innovating with purpose",
      home: "Home",
      about: "About Me",
      skills: "Skills",
      projects: "Projects",
    },
  };

  const t = texts[language];

  return (
    <footer className={`w-full transition-shadow bg-[#d8d5cf] text-[#043353] py-10 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
          {/* Logo + lema */}
          <div className="col-span-1">
            <img
              src="/assets/logoSamantaBck.png"
              alt="Logo Samanta"
              className="w-24 h-24 object-contain hover:scale-105 transition"
            />
            <p className="mt-2">{t.slogan}</p>
          </div>

          {/* Portafolio */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-2">{t.portfolio}</h4>
            <ul className="space-y-1">
              <li><a href="#inicio" className="hover:text-[#BB2649]">{t.home}</a></li>
              <li><a href="#sobre-mi" className="hover:text-[#BB2649]">{t.about}</a></li>
              <li><a href="#habilidades" className="hover:text-[#BB2649]">{t.skills}</a></li>
              <li><a href="#proyectos" className="hover:text-[#BB2649]">{t.projects}</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-2">{t.contact}</h4>
            <ul className="space-y-1">
              <li><a href="#contacto" className="hover:text-[#BB2649]">{t.form}</a></li>
              <li><a href="mailto:samytoruno19@gmail.com" className="hover:text-[#BB2649]">{t.email}</a></li>
              <li><a href="tel:+50684709804" className="hover:text-[#BB2649]">{t.phone}</a></li>
            </ul>
          </div>

          {/* Redes */}
          <div className="col-span-1">
            <h4 className="font-semibold mb-2">{t.redes}</h4>
            <ul className="space-y-1">
              <li><a href="https://github.com/SammyToruno11" target="_blank" rel="noreferrer" className="hover:text-[#BB2649] underline">{t.github}</a></li>
              <li><a href="https://www.linkedin.com/in/samanta-toru%C3%B1o-08835436b" target="_blank" rel="noreferrer" className="hover:text-[#BB2649] underline">{t.linkedin}</a></li>
            </ul>
          </div>
        </div>

        {/* Línea + íconos */}
        <div className="border-t border-[#043353]/30 pt-6 flex flex-col items-center">
          <div className="flex space-x-6 text-[#043353] text-lg mb-4">
            <a href="https://www.linkedin.com/in/samanta-toru%C3%B1o-08835436b" target="_blank" rel="noreferrer">
              <FaLinkedinIn className="hover:text-[#BB2649] transition" />
            </a>
            <a href="https://github.com/SammyToruno11" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-[#BB2649] transition" />
            </a>
            <a href="mailto:samytoruno19@gmail.com">
              <FaEnvelope className="hover:text-[#BB2649] transition" />
            </a>
          </div>
          <p className="text-xs text-[#043353]/70 text-center">
            © {new Date().getFullYear()} Samanta Toruño. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
