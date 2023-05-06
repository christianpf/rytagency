import aboutImg from "@src/assets/about_img.png";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CountUp } from "use-count-up";

const About = () => {
  const counterContainer = useRef(null);
  const isInView = useInView(counterContainer, { once: true });

  return (
    <section ref={counterContainer} className="w-full bg-secondary">
      <div className="w-full 2xl:w-4/6 lg:w-5/6 mx-auto px-4 lg:px-0 py-24">
        <div className="w-full flex flex-col lg:flex-row gap-16 items-center justify-between">
          <Image
            className="w-full sm:w-1/2 lg:w-1/2"
            src={aboutImg}
            width={450}
            height={300}
          />

          <div className="w-full md:w-1/2 text-center flex flex-col gap-4">
            <h2 className="text-6xl text-cyan-400 font-bold">Sobre nosotros</h2>
            <h3 className="text-3xl text-primary">
              Agencia de Marketing Digital
            </h3>
            <p className="text-lg text-white">
              En RYT AGENCY, creemos en la importancia de mantenernos
              actualizados con las últimas tendencias y novedades del mercado.
              Por eso, siempre estamos buscando formas innovadoras de mejorar
              nuestro servicio y de ayudar a nuestros clientes a destacar de su
              competencia.
            </p>
          </div>
        </div>

        {isInView ? (
          <div className="w-2/3 pt-20 mx-auto flex flex-col md:flex-row justify-between items-center text-primary text-4xl lg:text-6xl text-center">
            <div>
              <CountUp isCounting end={200} duration={5} />+
              <p className="text-xl lg:text-2xl text-white">Clientes felices</p>
            </div>
            <div>
              <CountUp isCounting end={150} duration={5} />+
              <p className="text-xl lg:text-2xl text-white">Clientes felices</p>
            </div>
            <div>
              <CountUp isCounting end={100} duration={5} />+
              <p className="text-xl lg:text-2xl text-white">Clientes felices</p>
            </div>
          </div>
        ) : (
          <h4>Cientos de Clientes felices</h4>
        )}
      </div>
    </section>
  );
};

export default About;
