'use client'
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Detecta cuando el usuario hace scroll hacia abajo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true); // Mostrar el botón si se ha desplazado más de 300px
      } else {
        setVisible(false); // Ocultar el botón si está cerca del top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <img src="/assets/scroll-icon.svg" alt="Ir arriba" className="w-8 h-8" />
      </button>
    )
  );
};

export default ScrollToTop;
