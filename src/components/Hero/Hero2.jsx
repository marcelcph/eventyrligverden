import { Link } from "react-router-dom";
import HeroSettings from "./HeroSettings.jsx";


function Hero2() {
  return (
    <>
    <section>
      <div className="items-center lg:flex">
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-3xl"
            src={HeroSettings.herobillede}
            alt="Catalogue-pana.svg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="">
              {HeroSettings.title}
            </h1>

            <p className="mt-3  ">
              {HeroSettings.beskrivelse}
            </p>
            <Link to="/shop">
            <button className="">
            {HeroSettings.knaptekst}
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Hero2;
