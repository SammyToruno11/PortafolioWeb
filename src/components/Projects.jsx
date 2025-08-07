'use client';

import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // Librería para animación de entrada

const Projects = () => {
  const data = [
    {
      img: "/assets/GoHealth.png",
      name: "GoHealth",
      especialidad: "Pediatría",
      githubLink: "https://github.com/camillaquiros/Proyecto-Componentes.git", // Enlace de GitHub
    },
    {
      img: "/assets/SMT.png",
      name: "Sistema de Multas de Transito",
      especialidad: "Cardióloga",
      githubLink: "https://github.com/Alexlop175Cenfotec/Proyecto2.git", // Enlace de GitHub
    },
    {
      img: "/assets/AgroGreen.png",
      name: "AgroGreen",
      especialidad: "Ortopedista",
      githubLink: "https://github.com/tuusuario/Proyecto3", // Enlace de GitHub
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        },
      },
    ]
  };

  return (
    <div id="proyectos" className="bg-[#d8d5cf] flex flex-col justify-center lg:px-32 px-5 pt-20 lg:pt-16 pb-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-8 lg:mb-6">
        <div>
          <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Proyectos
          </h1>
          <p className="mt-3 text-center lg:text-start">
            A lo largo de mi carrera he trabajado en diversos proyectos que abarcan desde aplicaciones web hasta soluciones personalizadas.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className="bg-white text-[#043353] px-4 py-2 rounded-lg border-2 border-[#BB2649] hover:bg-[#BB2649] hover:text-white hover:border-[#BB2649] active:bg-[#BB2649] active:text-white transition-all"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-white text-[#043353] px-4 py-2 rounded-lg border-2 border-[#BB2649] hover:bg-[#BB2649] hover:text-white hover:border-[#BB2649] active:bg-[#BB2649] active:text-white transition-all"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>

      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div 
              className="h-[400px] w-[400px] text-black rounded-xl shadow-lg mb-2 cursor-pointer" 
              key={index}
            >
              <div>
                <img src={e.img} alt={e.name} className="h-62 rounded-t-xl w-full" />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className="pt-2">{e.especialidad}</h3>

                {/* Animación de entrada usando react-intersection-observer */}
                <div className="mt-4">
                  <a href={e.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="details__btn mt-4 bg-[#BB2649] text-white px-6 py-2 rounded-md hover:bg-[#043353] transition-all">
                      Abrir
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
