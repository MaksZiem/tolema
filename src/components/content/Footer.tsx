import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

const Footer = () => {
  return (
    <>
      <div className="h-80 flex flex-row relative bg-gradient-to-r from-gray-200 via-gray-100 to-[#e8e6e6]">
        <div className="w-1/3">
          <div className="pl-5 pt-5 pr-1 pb-5 h-full">
            <div className="h-full border-r border-r-[2px] border-black flex flex-col">
              <h1 className="text-center text-3xl">Kontakt</h1>
              <div className="h-full flex flex-col justify-evenly">
                <div className="ml-5 text-2xl p-2 flex items-center gap-3">
                  <EmailIcon sx={{ color: "black" }} />
                  [ e-mail: operat23@gmail.com ]
                </div>
                <div className="ml-5 text-2xl p-2 flex items-center gap-3">
                  <LocationOnIcon sx={{ color: "black" }} />
                  [ adres: ul. Zdrojowa 13, 05-600 Grójec ]
                </div>
                <div className="ml-5 text-2xl p-2 flex items-center gap-3">
                  <PhoneIcon sx={{ color: "black" }} />
                  [ telefon: 123 123 123 ]
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="h-full p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.5084175240618!2d20.874692277261758!3d51.86993138415388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4719229b69ab742b%3A0xcbe63795a46cfed5!2sZdrojowa%2013%2C%2005-600%20Gr%C3%B3jec!5e0!3m2!1spl!2spl!4v1771795004676!5m2!1spl!2spl"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="h-8 bg-black text-white flex flex-col w-full text-center justify-center text-sm">
        &copy; TOLEMA
      </div>
    </>
  );
};

export default Footer;