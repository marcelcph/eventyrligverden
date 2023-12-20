import placeholderImg from "../../assets/images/placeholder.png";
import HeroSettings from "./HeroSettings.jsx";

function Hero2() {
  return (
    <div className="">
      <div className="items-center lg:flex">
        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            className="w-full h-full lg:max-w-3xl"
            src={placeholderImg}
            alt="Catalogue-pana.svg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold text-gray-800  lg:text-4xl">
              {HeroSettings.title}
            </h1>

            <p className="mt-3 text-gray-600 ">
              {HeroSettings.beskrivelse}
            </p>

            <button className="w-auto px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Køb nu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
