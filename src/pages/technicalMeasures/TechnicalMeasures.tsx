import { motion } from "framer-motion";
import { MotionValue } from "framer-motion";

interface Props {
  y: MotionValue<number>;
}

export default function TechnicalMeasures({ y }: Props) {
  return (
    <motion.div
      style={{ y }}
      className="sticky top-0 h-screen flex justify-between px-10 bg-[#D4B876] border-t border-gray-300"
    >
      <div className="relative w-1/2 h-2/3 flex items-center justify-start pl-10">
        <motion.div
          className="absolute w-160 h-90 bg-gray-800 rounded-lg shadow-2xl z-10"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg grayscale">
            <source src="/groups1.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          className="absolute w-140 h-80 bg-gray-800 rounded-lg shadow-2xl z-20 translate-x-100 translate-y-70"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: -30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg grayscale">
            <source src="/groups3.mp4" type="video/mp4" />
          </video>
        </motion.div>
        {Array.from({ length: 40 }, (_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${i % 3 === 0 ? "bg-white" : i % 3 === 1 ? "bg-gray-300" : "bg-gray-400"} ${i % 4 === 0 ? "w-1.5 h-1.5" : i % 4 === 1 ? "w-1 h-1" : i % 4 === 2 ? "w-0.5 h-0.5" : "w-2 h-2"}`}
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 5), 0],
              y: [0, (i % 3 === 0 ? -1 : 1) * (20 + i * 3), 0],
              opacity: [0.2 + i * 0.03, 0.6 + i * 0.02, 0.2 + i * 0.03],
            }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            style={{ top: `${15 + ((i * 6) % 70)}%`, left: `${10 + ((i * 8) % 80)}%`, opacity: 0.2 + (i % 5) * 0.1 }}
          />
        ))}
      </div>
      <div className="w-180 mt-40 flex flex-col mr-20">
        <h1 className="text-6xl pr-20 font-thin">Wycena <b>środków technicznych</b></h1>
        <div className="text-2xl mt-10 leading-8 font-thin text-justify">
          Oferujemy kompleksową wycenę oraz oszacowanie wartości maszyn budowlanych, drogowych, rolniczych, ciągników, koparek, ładowarek, koparko-ładowarek, podnośników oraz pojazdów specjalistycznych i nietypowych. Sporządzamy wyceny maszyn przemysłowych, leśnych, maszyn przemysłu drzewnego, linii i ciągów technologicznych, urządzeń mierniczych, pomiarowych, a także sprzętu wodnego, wózków widłowych, naczep, przyczep, cystern, a nawet taboru kolejowego — lokomotyw i wagonów. Wyceniamy także środki trwałe, techniczne i niskocenne, wyposażenie parków maszynowych, warsztatów, szpitali, przychodni, gabinetów medycznych, stomatologicznych, weterynaryjnych, a także salonów kosmetycznych i fitness. Wykonujemy wyceny sprzętu RTV, AGD, komputerowego, medycznego, stomatologicznego, wyposażenia lotnisk, magazynów oraz inwentaryzacje stanów magazynowych. Oferujemy rzetelne oszacowanie wartości środków technicznych, ruchomości, megaukładów technicznych oraz urządzeń wszystkich branż.
        </div>
        <div className="flex items-center justify-center mt-20">
          <button className="relative px-10 py-5 bg-transparent border-2 border-white text-white-500 font-semibold overflow-hidden group transition-colors duration-300 hover:text-black cursor-pointer">
            <span className="absolute inset-0 bg-[#D4B876] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></span>
            <span className="relative z-10 text-2xl font-light">Sprawdź cennik</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}