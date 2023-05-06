
import Image from "next/image";

import {motion } from "framer-motion"

import hero_img from "@src/assets/hero_img.png";


import {BsArrowRight} from "react-icons/bs"

const Hero = () => {
  return (
    <section className="w-full h-full lg:h-[88vh] bg-[#1D1D1D] bg-hero_bg_1 bg-no-repeat bg-left-bottom md:bg-left z-10">
      <div className="absolute top-0 right-0 w-full h-full bg-hero_bg_2 bg-no-repeat bg-right-top bg-contain z-0"></div>
      <div className="w-full h-full px-4 2xl:w-4/6 lg:w-5/6 lg:px-0  mx-auto flex flex-col py-5 lg:flex-row text-center justify-between items-center gap-20">
        <motion.div 
            initial={{ translateX: "-200px" }}
            animate={{ translateX: "0" }}          
          className="w-full lg:w-1/2 text-cyan-400 py-8 z-20">
          <h2 className="font-bold text-3xl">
            EXPERTOS EN CAPTACIÓN DE CLIENTES POTENCIALES PARA EMPRESAS
          </h2>
          <p className="text-lg text-white py-6">
            ¿Quieres aumentar tu clientela e incrementar tu volumen de negocio?
            Te presentamos nuestro servicio premium de <strong className="text-cyan-400">CAPTACIÓN DE LEADS</strong>, ¡la
            solución perfecta para hacer crecer tu negocio! Nuestros servicios
            integrales te ayudarán a aumentar tu cartera de clientes y mejorar
            tus <strong className="text-cyan-400">RESULTADOS</strong>. Da el
            primer paso hacia el éxito.
          </p>
          <button className="bg-primary text-white text-xl p-4 rounded-xl transition-colors duration-200 hover:bg-green-600 hover:animate-pulse inline-flex items-center gap-4">
            Empecemos <BsArrowRight className="text-3xl "/>
          </button>
        </motion.div>  
        <div className="relative z-10 max-w-[600px] flex justify-center items-center w-full lg:w-1/2">
          <Image
            src={hero_img}
            width={550}
            height={300}
            alt="Imagen de cuatro personas trabajando con un macbook"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
