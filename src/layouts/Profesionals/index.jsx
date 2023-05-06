import Characteristic from "./Characteristic";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


const Profesionals = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  const divVariant = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
      },
    },
    hidden: { x: 0, opacity: 0 },
  };

  return (
    <section className=" px-4 lg:px-0 bg-gradient-to-b from-white to-accent/30">
      <div className="w-full 2xl:w-4/6 lg:w-5/6 mx-auto py-12">
        <h2 className="text-3xl font-bold text-primary">Somos Profesionales</h2>
        <h3 className="text-2xl py-4">Quedarás satisfecho</h3>

        <motion.div
          variants={divVariant}
          ref={ref}
          animate={control}
          initial="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center pt-4 gap-4 text-center"
        >
          <Characteristic>
            <h3>Equipo Experto</h3>
            <p>
              Nuestro equipo se encargará de desarrollar una estrategia única, que
              implementará en cada uno de nuestros clientes para maximizar sus
              resultados.
            </p>
          </Characteristic>
          <Characteristic>
            <h3>Optimización</h3>
            <p>
              Estamos tan comprometidos con nuestros clientes, que antes de lanzar
              cualquier campaña online, analizamos el servicio/producto y
              diseñamos una nueva propuesta añadiéndole el valor que necesita.
            </p>
          </Characteristic>
          <Characteristic>
            <h3>Estrategia</h3>
            <p>
              Ahora sí, es hora de preparar nuestra metodología RYT,
              que hará que vendas en piloto automático 365 días al año.
            </p>
          </Characteristic>
          <Characteristic>
            <h3>Resultados</h3>
            <p>
              Una gran pregunta ¿Por dónde llegarán todos esos
              clientes? Fácil, integramos en tu negocio un CRM que hará que
              contactes con todos ellos en cuestión de segundos.
            </p>
          </Characteristic>
        </motion.div>

        <button className="w-full bg-gradient-to-r z-50 from-cyan-400/70 to-cyan-500/70 border-2 border-text mt-12 p-4 text-2xl text-gray-900 rounded-xl font-bold uppercase transition hover:scale-105">
          Haz click y agenda una llamada estratégica
        </button>
      </div>
    </section>
  );
};

export default Profesionals;
