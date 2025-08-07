'use client';

import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Usamos el ícono de flecha hacia arriba de react-icons

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Detecta cuando el usuario hace scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Cuando el usuario haga scroll más de 300px hacia abajo
        setVisible(true); // Mostrar el botón
      } else {
        setVisible(false); // Ocultar el botón cuando se vuelve al top
      }
    };

    window.addEventListener("scroll", handleScroll); // Escucha el evento de scroll
    return () => window.removeEventListener("scroll", handleScroll); // Limpia el evento
  }, []);

  // Función para hacer scroll al principio de la página
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="scroll-top fixed bottom-6 right-6 bg-[#BB2649] text-white p-3 rounded-full shadow-md hover:bg-[#043353] transition-all"
        title="Ir arriba"
      >
        <FaArrowUp size={30} /> {/* Usamos el ícono de flecha hacia arriba */}
      </button>
    )
  );
};

export default ScrollToTop;
