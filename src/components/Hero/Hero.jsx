import { Link } from "react-router-dom";
import HeroSettings from "./HeroSettings.jsx";

function Hero() {
  return (
    <>
      <section
        className="w-full bg-center bg-cover min-h-screen flex items-center "
        style={{backgroundImage: `url(${HeroSettings.herobillede})`}}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center ">
            <h1 className="">
              {HeroSettings.title}
            </h1>
            <p className="">{HeroSettings.beskrivelse}</p>
            <Link to="/shop">
            <button className="">
              {HeroSettings.knaptekst}
            </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
