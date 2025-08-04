'use client'
import { SiPython, SiJavascript, SiMongodb, SiHtml5, SiCss3, SiUbuntu, SiFlutter, SiGit, SiFigma, SiTailwindcss, SiReact, SiDjango } from "react-icons/si";

const habilidades = [
  { nombre: "Python", icono: <SiPython size={40} /> },
  { nombre: "Flutter", icono: <SiFlutter size={40} /> },
  { nombre: "Ubuntu", icono: <SiUbuntu size={40} /> },
  { nombre: "Git", icono: <SiGit size={40} /> },
  { nombre: "Figma", icono: <SiFigma size={40} /> },
  { nombre: "MongoDB", icono: <SiMongodb size={40} /> },
  { nombre: "HTML & CSS", icono: <><SiHtml5 size={25} /> <SiCss3 size={25} /></> },
  { nombre: "JavaScript", icono: <SiJavascript size={40} /> },
  { nombre: "Tailwind", icono: <SiTailwindcss size={40} /> },
  { nombre: "React", icono: <SiReact size={40} /> },
  { nombre: "Django", icono: <SiDjango size={40} /> },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-16 bg-[#E7E3DD] text-[#043353]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {habilidades.map((hab, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300">
              <div className="mb-2 text-[#043353]">{hab.icono}</div>
              <span className="font-medium text-sm text-center">{hab.nombre}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
