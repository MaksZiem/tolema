import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/content/Footer";
import Navbar from "../../components/navigation/navbar";
import SectionArrow from "../../components/navigation/SectionArrow";

function Home() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [1000, 1500], [0, 0]);
  const y2 = useTransform(scrollY, [1500, 2000], [0, 0]);
  // const y3 = useTransform(scrollY, [2000, 2500], [0, 0]);

  // Parallax effect for city background - subtle movement
  const cityParallax = useTransform(scrollY, [0, 2000], [0, -200]);

  const qualifications = [
    "Do szacowania nieruchomości, nr 6031 (Minister Infrastruktury i Rozwoju)",
    "Szacowania nieruchomości komercyjnych, nr 23496 (CCIM Institute Chicago)",
    "Do pośrednictwa w obrocie nieruchomościami, nr 17576 (Minister Transportu, Budownictwa i Gospodarki Morskiej)",
    "Do zarządzania nieruchomościami, nr 23783 (Minister Transportu, Budownictwa i Gospodarki Morskiej)",
    "Do sporządzania wycen dla potrzeb zabezpieczenia wierzytelności bankowych, nr 418",
    "Do sporządzania wyceny dla potrzeb zabezpieczenia wierzytelności, nr 10/2018",
    "Do szacowania ruchomości, maszyn, urządzeń i środków technicznych",
  ];

  const tiles = [
    {
      text: "Indywidualne podejście do każdej sprawy",
      bg: "bg-[#D4B876]",
      delay: 0.1,
    },
    { text: "Przejrzyste koszty od początku", bg: "bg-[#D4B876]", delay: 0.2 },
    { text: "Najlepsze ceny", bg: "bg-[#BFA36F]", delay: 0.3 },
    {
      text: "Doświadczenie w sprawach dużych i małych",
      bg: "bg-[#C5A46A]",
      delay: 0.4,
    },
    {
      text: "Rzetelność i uczciwość w działaniu",
      bg: "bg-[#D4B876]",
      delay: 0.5,
    },
    {
      text: "Wieloletnie doświadczenie poparte efektami",
      bg: "bg-[#BFA36F]",
      delay: 0.6,
    },
    {
      text: "Spokój i pewność, że wszystko jest pod kontrolą",
      bg: "bg-[#C5A46A]",
      delay: 0.7,
    },
    { text: "Proste, zrozumiałe procedury", bg: "bg-[#D4B876]", delay: 0.8 },
  ];

  const tilePositions = [1, 3, 4, 6, 9, 11, 12, 14];

  return (
    <div className="font-sans relative z-0">
      <Navbar />
      <section className="relative h-screen w-full text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
        >
          <source src="/temida.mp4" type="video/mp4" />
        </video>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex pt-70 pl-320 text-7xl font-normal"
        >
          <div className="relative pb-4">
            <span className="text-black text-center">Wiedza i praktyka</span>
            <motion.span
              initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-0 text-white pb-4 text-center"
            >
              Wiedza i praktyka
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex pl-280 h-20 pt-5 text-6xl font-bold"
        >
          <div className="relative pb-4">
            <span className="text-black text-center">Najwyższe standardy</span>
            <motion.span
              initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-0 text-white pb-4 text-center"
            >
              Najwyższe standardy
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex pl-280 h-20 pt-10 text-6xl font-extralight"
        >
          <div className="relative pb-4">
            <span className="text-black text-center">Zaangażowanie</span>
            <motion.span
              initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-0 text-white pb-4 text-center"
            >
              Zaangażowanie
            </motion.span>
          </div>
        </motion.div>
        <div className="flex justify-center mt-50">
          <div className="flex justify-between p-8 w-[90%] border-t border-b border-white">
            <div className="w-[400px] text-l font-thin ">
              Sprawy majątkowe i prawne wymagają spokoju, doświadczenia i
              precyzyjnych rozwiązań — my dostarczamy to, co najważniejsze:
              pewność, bezpieczeństwo i przejrzyste zasady współpracy.
            </div>
            <div className="flex justify-start flex-col">
              <div className="text-l text-center">na rynkiu od</div>
              <div className="text-4xl text-center font-extralight">
                [ 2017 ]
              </div>
            </div>
            <div className="flex justify-center flex-col font-thin text-2xl">
              [ 7 ] lat doświadczenia
            </div>
            <div className="flex justify-end flex-col">
              <div className="text-4xl text-center font-extralight">
                [ 230 ]
              </div>
              <div className="text-l">ukończonych wycen</div>{" "}
            </div>
            <div className="text-4xl flex justify-center flex-col">
              po prostu TOLEMA.
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-5 transform flex w-30 h-15 opacity-50 bg-white items-center justify-center box-shadow-md rounded-xl gap-5">
          <img
            src="/instagram.png"
            alt="instagram"
            title="instgram"
            className="h-2/3 cursor-pointer "
          />
          <img
            src="/facebook.png"
            alt="facebook"
            className="h-2/3 cursor-pointer"
          />
        </div>
        <SectionArrow label="O MNIE" targetSection="o mnie" />
      </section>

      <section className="bg-white h-screen w-screen flex flex-row" id="o mnie">
        <div className="flex justify-between flex-col items-center w-1/2 bg-gradient-to-r from-gray-200 via-gray-100  to-[#e8e6e6] text-white font-bold text-lg px-20 py-3">
          <div className="text-5xl font-light h-20 mt-10 flex items-center text-black">
            O mnie
          </div>

          <div className="border-t border-b border-black py-5 border-solid">
            <div className="font-bold text-2xl  text-justify text-black font-normal">
              Należę do Warszawskiego Stowarzyszenia Rzeczoznawców Majątkowych
              zrzeszonego w Polskiej Federacji Stowarzyszeń Rzeczoznawców
              Majątkowych
            </div>
            <div className="font-normal text-justify text-xl text-black">
              Jestem absolwentem Wydziału Wiertnictwa Nafty i Gazu (specjalność
              gazownictwo ziemne) oraz Wydziału Górnictwa i Geoinżynierii
              (specjalność zarządzanie i marketing) Akademii Górniczo-Hutniczej
              w Krakowie. Ukończyłem studia MBA na Akademii Leona Koźmińskiego w
              Warszawie. Posiadam certyfikaty „Wycena dla potrzeb zabezpieczenia
              wierzytelności bankowych” (Związek Banków Polskich) oraz „Wycena
              dla potrzeb zabezpieczenia wierzytelności” (Polska Federacja
              Stowarzyszeń Rzeczoznawców Majątkowych). Jestem wpisany na listę
              rzeczoznawców majątkowych rekomendowanych do wycen nieruchomości
              dla sektora bankowego, publikowaną m.in. przez Związek Banków
              Polskich.
            </div>
          </div>
          <div className="w-full h-120">
            <h2 className="text-4xl font-light text-center mt-5 text-black">
              Uprawnienia i certyfikaty
            </h2>
            <ul className="gap-1 mt-5">
              {qualifications.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start  transition hover:translate-x-2 hover:text-[#2d2d2d] bg-[#D4B876] cursor-pointer my-1 hover:bg-white duration-300"
                >
                  <div className="font-normal text-xl leading-snug text-black p-2">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 relative overflow-hidden">
          <motion.div
            style={{ y: cityParallax }}
            className="absolute inset-0 w-full h-screen"
          >
            <img
              src="/city.jpg"
              alt="City background"
              className="w-full h-1/3 object-cover opacity-70 px-5 filter grayscale"
              style={{
                top: "40%",
                position: "absolute",
              }}
            />
          </motion.div>

          {/* <div className="relative z-10  flex-col items-center py-3">
            <div className="text-5xl font-light h-20 mt-10 items-center text-black text-center flex flex-col justify-center">
              Dlaczego TOLEMA?
            </div>

            <div className="grid grid-cols-4 gap-0 p-10 mt-20">
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#D4B876]">
                Indywidualne podejście do każdej sprawy
              </div>
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#D4B876]">
                Przejrzyste koszty od początku
              </div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#BFA36F]">
                Najlepsze ceny
              </div>
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#C5A46A]">
                Doświadczenie w sprawach dużych i małych
              </div>
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#D4B876]">
                Rzetelność i uczciwość w działaniu
              </div>
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#BFA36F]">
                Wieloletnie doświadczenie poparte efektami
              </div>
              <div className="p-4 min-h-30"></div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#C5A46A]">
                Spokój i pewność, że wszystko jest pod kontrolą
              </div>
              <div className="p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal hover:bg-white hover:text-black transition-all duration-300 cursor-pointer bg-[#D4B876]">
                Proste, zrozumiałe procedury
              </div>
              <div className="p-4 min-h-30"></div>
            </div>
            <div className="mt-50">
              <SectionArrow
                label="OFERTA"
                targetSection="oferta"
                color="black"
              />
            </div>
          </div> */}

          <div className="relative z-10 flex-col items-center py-3">
            <div className="text-5xl font-light h-20 mt-10 items-center text-black text-center flex flex-col justify-center">
              Dlaczego TOLEMA?
            </div>

            <div className="grid grid-cols-4 gap-0 p-10 mt-20">
              {Array.from({ length: 16 }, (_, index) => {
                const tileIndex = tilePositions.indexOf(index);
                const isContentTile = tileIndex !== -1;

                if (!isContentTile) {
                  return <div key={index} className="p-4 min-h-30"></div>;
                }

                const tile = tiles[tileIndex];

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0.3,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      transition: { duration: 0.3 },
                    }}
                    transition={{
                      duration: 0.4,
                      delay: tile.delay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal cursor-pointer ${tile.bg}`}
                  >
                    {tile.text}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-50">
              <SectionArrow
                label="OFERTA"
                targetSection="oferta"
                color="black"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative h-[300vh] bg-black text-white z-10"
        id="oferta"
      >
        <motion.div
          style={{ y: y1 }}
          className="sticky top-0 h-screen flex justify-between px-10 bg-black border-t border-gray-300 overflow-hidden"
        >
          <div className="relative w-1/2 h-2/3 flex items-center justify-start pl-10">
            <motion.div
              className="absolute w-160 h-90 bg-gray-800 rounded-lg shadow-2xl z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg grayscale"
              >
                <source src="/nieruchomosc2.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              className="absolute w-140 h-80 bg-gray-800 rounded-lg shadow-2xl z-20 translate-x-100 translate-y-70"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg grayscale"
              >
                <source src="/nieruchomosc1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={i}
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
                animate={{
                  x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 5), 0],
                  y: [0, (i % 3 === 0 ? -1 : 1) * (20 + i * 3), 0],
                  opacity: [0.2 + i * 0.03, 0.6 + i * 0.02, 0.2 + i * 0.03],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                style={{
                  top: `${15 + ((i * 6) % 70)}%`,
                  left: `${10 + ((i * 8) % 80)}%`,
                  opacity: 0.2 + (i % 5) * 0.1,
                }}
              />
            ))}
          </div>
          <div className="w-180 mt-40 text-justify flex flex-col mr-20">
            <h1 className="text-6xl pr-20 font-thin">
              Wycena <b>nieruchomości</b>
            </h1>
            <div className="text-3xl mt-10  leading-8 font-thin">
              Oferujemy profesjonalne wyceny nieruchomości: gruntów, domów,
              działek, mieszkań, budynków oraz lokali mieszkalnych, użytkowych i
              spółdzielczych. Wyceniamy również nieruchomości komercyjne,
              przemysłowe, magazynowe, biurowe, rolne, a także budynki
              mieszkalne, kamienice, osiedla wielorodzinne, budowle i ich
              części. Sporządzamy wyceny czynszu, dzierżawy, służebności, praw
              użytkowania, prawa dożywocia, ograniczonych praw rzeczowych, a
              także wynagrodzenia za bezumowne korzystanie z nieruchomości.
              Wykonujemy wyceny dróg koniecznych, przejazdu, przechodu oraz dla
              celów aktualizacji opłat rocznych z tytułu użytkowania
              wieczystego.
            </div>
            <div className="flex items-center justify-center mt-20">
              <button className="relative px-10 py-5 bg-transparent border-2 border-white text-white-500 font-semibold overflow-hidden group transition-colors duration-300 hover:text-black cursor-pointer">
                <span className="absolute inset-0 bg-[#D4B876] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></span>
                <span className="relative z-10 text-2xl font-light">
                  Sprawdź cennik
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="sticky top-0 h-screen flex  justify-between px-10 bg-[#D4B876] border-t border-gray-300"
        >
          <div className="relative w-1/2 h-2/3 flex items-center justify-start pl-10">
            <motion.div
              className="absolute w-160 h-90 bg-gray-800 rounded-lg shadow-2xl z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg grayscale"
              >
                <source src="/groups1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              className="absolute w-140 h-80 bg-gray-800 rounded-lg shadow-2xl z-20 translate-x-100 translate-y-70"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg grayscale"
              >
                <source src="/groups3.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={i}
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
                animate={{
                  x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 5), 0],
                  y: [0, (i % 3 === 0 ? -1 : 1) * (20 + i * 3), 0],
                  opacity: [0.2 + i * 0.03, 0.6 + i * 0.02, 0.2 + i * 0.03],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                style={{
                  top: `${15 + ((i * 6) % 70)}%`,
                  left: `${10 + ((i * 8) % 80)}%`,
                  opacity: 0.2 + (i % 5) * 0.1,
                }}
              />
            ))}
          </div>
          <div className="w-180 mt-40 flex flex-col mr-20">
            <h1 className="text-6xl pr-20 font-thin">
              Wycena <b>środków technicznych</b>
            </h1>
            <div className="text-2xl mt-10  leading-8 font-thin text-justify">
              Oferujemy kompleksową wycenę oraz oszacowanie wartości maszyn
              budowlanych, drogowych, rolniczych, ciągników, koparek, ładowarek,
              koparko-ładowarek, podnośników oraz pojazdów specjalistycznych i
              nietypowych. Sporządzamy wyceny maszyn przemysłowych, leśnych,
              maszyn przemysłu drzewnego, linii i ciągów technologicznych,
              urządzeń mierniczych, pomiarowych, a także sprzętu wodnego, wózków
              widłowych, naczep, przyczep, cystern, a nawet taboru kolejowego —
              lokomotyw i wagonów. Wyceniamy także środki trwałe, techniczne i
              niskocenne, wyposażenie parków maszynowych, warsztatów, szpitali,
              przychodni, gabinetów medycznych, stomatologicznych,
              weterynaryjnych, a także salonów kosmetycznych i fitness.
              Wykonujemy wyceny sprzętu RTV, AGD, komputerowego, medycznego,
              stomatologicznego, wyposażenia lotnisk, magazynów oraz
              inwentaryzacje stanów magazynowych. Oferujemy rzetelne oszacowanie
              wartości środków technicznych, ruchomości, megaukładów
              technicznych oraz urządzeń wszystkich branż.
            </div>
            <div className="flex items-center justify-center mt-20">
              <button className="relative px-10 py-5 bg-transparent border-2 border-white text-white-500 font-semibold overflow-hidden group transition-colors duration-300 hover:text-black cursor-pointer">
                <span className="absolute inset-0 bg-[#D4B876] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></span>
                <span className="relative z-10 text-2xl font-light">
                  Sprawdź cennik
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{ y: y2 }}
          className="sticky top-0 h-screen flex  justify-between px-10 bg-white border-t border-gray-300"
        >
          <div className="relative w-1/2 h-2/3 flex items-center justify-start pl-10">
            <motion.div
              className="absolute w-160 h-90 bg-gray-800 rounded-lg shadow-2xl z-10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg grayscale"
              >
                <source src="/groups1.mp4" type="video/mp4" />
              </video>
            </motion.div>
            <motion.div
              className="absolute w-140 h-80 bg-gray-800 rounded-lg shadow-2xl z-20 translate-x-100 translate-y-70"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg grayscale"
              >
                <source src="/groups3.mp4" type="video/mp4" />
              </video>
            </motion.div>
            {Array.from({ length: 40 }, (_, i) => (
              <motion.div
                key={i}
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
                animate={{
                  x: [0, (i % 2 === 0 ? 1 : -1) * (30 + i * 5), 0],
                  y: [0, (i % 3 === 0 ? -1 : 1) * (20 + i * 3), 0],
                  opacity: [0.2 + i * 0.03, 0.6 + i * 0.02, 0.2 + i * 0.03],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                style={{
                  top: `${15 + ((i * 6) % 70)}%`,
                  left: `${10 + ((i * 8) % 80)}%`,
                  opacity: 0.2 + (i % 5) * 0.1,
                }}
              />
            ))}
          </div>
          <div className="w-180 mt-40 text-justify  text-black flex flex-col mr-20">
            <h1 className="text-6xl pr-20 font-thin">
              Wycena <b>biznesu</b>
            </h1>
            <div className="text-3xl mt-10  leading-8 font-thin">
              Oferujemy profesjonalną wycenę działalności gospodarczej w każdej
              formie i rodzaju, zarówno całych przedsiębiorstw, jak i ich
              zorganizowanych części. Sporządzamy wyceny spółek, akcji, udziałów
              oraz określamy wartość firm, marek, znaków towarowych, domen,
              sklepów internetowych, a także stron internetowych. Wyceniamy
              również aktywa niematerialne, takie jak know-how, patenty czy
              instrumenty finansowe. Przygotowujemy wyceny do celów rozliczeń ze
              wspólnikiem, likwidacji, analizujemy opłacalność inwestycji i
              szacujemy realną wartość aktywów w kontekście biznesowym.
            </div>
            <div className="flex items-center justify-center mt-20">
              <button className="relative px-10 py-5 bg-transparent border-2 border-white text-white-500 font-semibold overflow-hidden group transition-colors duration-300 hover:text-black cursor-pointer">
                <span className="absolute inset-0 bg-[#D4B876] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400"></span>
                <span className="relative z-10 text-2xl font-light">
                  Sprawdź cennik
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
