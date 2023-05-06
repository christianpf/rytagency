import Link from "next/link";

import {BsJournalBookmark} from "react-icons/bs"

const BookCall = () => {
  return (
    <section className="w-full px-4 lg:px-0 py-16 bg-secondary">
      <div className="2xl:w-4/6 lg:w-5/6 w-full text-center py-8  mx-auto bg-gradient-to-r z-50 from-cyan-400/70 to-cyan-500/70 rounded-xl border-teal-200 border-2">
        <h2 className="text-4xl font-bold text-white">No te quedes con las dudas</h2>
        <h3 className="text-3xl text-white py-4">Aumenta tu facturación</h3>
        <p className="text-xl text-white py-4"><strong>Reserva</strong> una llamada con nuestro equipo y las <strong>ventas</strong> vendrán solas</p>
        <Link href="https://calendly.com/ryt-agency-group/30min?month=2023-05" className="bg-cyan-400 p-4 inline-flex items-center gap-4 text-3xl rounded-2xl border-2 border-secondary font-bold animate-pulse hover:border-gray-200 hover:text-cyan-950">
          Reserva ahora <BsJournalBookmark />
        </Link>
      </div>
    </section>
  );
};

export default BookCall;
