import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
          Hola, soy <span className="text-[#BB2649]">Samanta Toruno</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ fontFamily: 'var(--font-montserrat)' }}>
          Bienvenido a mi portafolio profesional. Aquí encontrarás mis proyectos, habilidades y experiencia.
        </p>
        <button className="mt-6 bg-[#043353] text-white px-6 py-2 rounded hover:bg-[#BB2649] transition">
          Descargar CV
        </button>
      </div>
    </main>
  );
}

