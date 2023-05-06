import React, { useRef, useState } from "react";
import Navlink from "./Navlink";
import Image from "next/image";

import logo from "@src/assets/logo.webp";
import useMediaQuery from "@src/hooks/useMediaQuery";

import { FiMenu, FiX } from "react-icons/fi";
import styles from "@src/styles/Navbar.module.css";
import "animate.css";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isSmallScreen = useMediaQuery("(max-width: 460px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);


  const handleMenuClick = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <nav className={`w-full bg-black border-b-2 border-text z-40`}>
      <div className="2xl:w-4/6 lg:w-5/6 w-full px-2 lg:px-0 mx-auto flex justify-between items-center text-xl py-4">
        <Image src={logo} width={isDesktop ? 200 : 150} heigth={200} alt="Logo RYT Agency" />
        {isDesktop ? (
          <>
            <div className="flex gap-7 text-center uppercase">
              <Navlink url="/" text="Inicio" />
              <Navlink url="/servicios" text="Servicios" />
              <Navlink url="/blog" text="Blog" />
            </div>
            <button className="bg-white w-[200px] p-3 rounded-xl text-lg font-bold shadow-custom shadow-white transition duration-200 hover:scale-110">
              ¡Empieza Ya!
            </button>
          </>
        ) : (
          <div className="flex gap-10">
            {!isSmallScreen && (
              <button className="bg-white  p-3 rounded-xl text-lg font-bold shadow-custom shadow-white transition duration-200 hover:scale-110">
                ¡Empieza Ya!
              </button>
            )}
            <button
              className="text-cyan-400 text-4xl hover:bg-cyan-400 hover:text-white rounded-xl"
              aria-label={isMenuToggled ? "Cerrar Menú" : "Abrir Menú"}
              onClick={handleMenuClick}
            >
              {isMenuToggled ? <FiX /> : <FiMenu />}
            </button>
          </div>
        )}
      </div>
      {isSmallScreen && (
        <div className="w-full text-center mb-4 mt-4">
          <button className="bg-white w-[200px] p-3 rounded-xl text-lg font-bold shadow-custom shadow-white transition duration-200 hover:scale-110">
            ¡Empieza Ya!
          </button>
        </div>
      )}
      {isMenuToggled && !isDesktop && (
        <div
          className={`animate__animated animate__fadeInDown absolute flex flex-col text-center w-full uppercase`}
        >
          <Navlink url="/" text="Inicio" mobile />
          <Navlink url="/servicios" text="Servicios" mobile />
          <Navlink url="/blog" text="Blog" mobile />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
