import { motion } from "framer-motion";
import { MotionValue } from "framer-motion";
<<<<<<< HEAD
import PricingButton from "../../components/content/Buttons/PricingButton";
=======
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4

interface Props {
  y: MotionValue<number>;
}

export default function Property({ y }: Props) {
  return (
    <motion.div
      style={{ y }}
      className="sticky top-0 h-screen flex justify-between px-10 bg-black border-t border-gray-300 overflow-hidden"
    >
      <div className="relative w-1/2 h-2/3 flex items-center justify-start pl-10">
        <motion.div
<<<<<<< HEAD
          className="absolute w-160 h-100 bg-gray-800 rounded-lg shadow-2xl z-10"
=======
          className="absolute w-160 h-90 bg-gray-800 rounded-lg shadow-2xl z-10"
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
<<<<<<< HEAD
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg grayscale"
          >
=======
          <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg grayscale">
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
            <source src="/nieruchomosc2.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
<<<<<<< HEAD
          className="absolute w-140 h-90 bg-gray-800 rounded-lg shadow-2xl z-20 translate-x-90 translate-y-85"
=======
          className="absolute w-140 h-80 bg-gray-800 rounded-lg shadow-2xl z-20 translate-x-100 translate-y-70"
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: -30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
<<<<<<< HEAD
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-lg grayscale"
          >
=======
          <video autoPlay muted loop playsInline className="w-full h-full object-cover rounded-lg grayscale">
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
            <source src="/nieruchomosc1.mp4" type="video/mp4" />
          </video>
        </motion.div>
        {Array.from({ length: 40 }, (_, i) => (
          <motion.div
            key={i}
<<<<<<< HEAD
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-white"
                : i % 3 === 1
                ? "bg-gray-300"
                : "bg-gray-400"
            } ${
              i % 4 === 0
                ? "w-1.5 h-1.5"
                : i % 4 === 1
                ? "w-1 h-1"
                : i % 4 === 2
                ? "w-0.5 h-0.5"
                : "w-2 h-2"
            }`}
=======
            className={`absolute rounded-full ${i % 3 === 0 ? "bg-white" : i % 3 === 1 ? "bg-gray-300" : "bg-gray-400"} ${i % 4 === 0 ? "w-1.5 h-1.5" : i % 4 === 1 ? "w-1 h-1" : i % 4 === 2 ? "w-0.5 h-0.5" : "w-2 h-2"}`}
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
            animate={{
              x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 5), 0],
              y: [0, (i % 3 === 0 ? -1 : 1) * (20 + i * 3), 0],
              opacity: [0.2 + i * 0.03, 0.6 + i * 0.02, 0.2 + i * 0.03],
            }}
<<<<<<< HEAD
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
            style={{
              top: `${20 + ((i * 6) % 70)}%`,
              left: `${10 + ((i * 8) % 80)}%`,
              opacity: 0.2 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="w-180 mt-40 text-justify flex flex-col mr-20">
        <motion.h1
          className="text-6xl pr-20 font-thin"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Wycena <b>nieruchomości</b>
        </motion.h1>

        <motion.div
          className="border-l mt-10 border-l-[1px] border-white"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl leading-8 font-thin ml-10">
            Oferujemy profesjonalne wyceny nieruchomości: gruntów, domów,
            działek, mieszkań, budynków oraz lokali mieszkalnych, użytkowych i
            spółdzielczych. Wyceniamy również nieruchomości komercyjne,
            przemysłowe, magazynowe, biurowe, rolne, a także budynki mieszkalne,
            kamienice, osiedla wielorodzinne, budowle i ich części. Sporządzamy
            wyceny czynszu, dzierżawy, służebności, praw użytkowania, prawa
            dożywocia, ograniczonych praw rzeczowych, a także wynagrodzenia za
            bezumowne korzystanie z nieruchomości. Wykonujemy wyceny dróg
            koniecznych, przejazdu, przechodu oraz dla celów aktualizacji opłat
            rocznych z tytułu użytkowania wieczystego.
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PricingButton />
        </motion.div>
=======
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            style={{ top: `${15 + ((i * 6) % 70)}%`, left: `${10 + ((i * 8) % 80)}%`, opacity: 0.2 + (i % 5) * 0.1 }}
          />
        ))}
      </div>
      <div className="w-180 mt-40 text-justify flex flex-col mr-20">
        <h1 className="text-6xl pr-20 font-thin">Wycena <b>nieruchomości</b></h1>
        <div className="text-3xl mt-10 leading-8 font-thin">
          Oferujemy profesjonalne wyceny nieruchomości: gruntów, domów, działek, mieszkań, budynków oraz lokali mieszkalnych, użytkowych i spółdzielczych. Wyceniamy również nieruchomości komercyjne, przemysłowe, magazynowe, biurowe, rolne, a także budynki mieszkalne, kamienice, osiedla wielorodzinne, budowle i ich części. Sporządzamy wyceny czynszu, dzierżawy, służebności, praw użytkowania, prawa dożywocia, ograniczonych praw rzeczowych, a także wynagrodzenia za bezumowne korzystanie z nieruchomości. Wykonujemy wyceny dróg koniecznych, przejazdu, przechodu oraz dla celów aktualizacji opłat rocznych z tytułu użytkowania wieczystego.
        </div>
        <div className="flex items-center justify-center mt-20">
          <button className="relative px-10 py-5 bg-transparent border-2 border-white text-white-500 font-semibold overflow-hidden group transition-colors duration-300 hover:text-black cursor-pointer">
            <span className="absolute inset-0 bg-[#D4B876] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></span>
            <span className="relative z-10 text-2xl font-light">Sprawdź cennik</span>
          </button>
        </div>
>>>>>>> 00f7941b15c7a158878709e8390b9fbc6f253dd4
      </div>
    </motion.div>
  );
}