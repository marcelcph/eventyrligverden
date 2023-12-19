import placeholderImg from "../../assets/images/placeholder.png";
import HeroSettings from "./HeroSettings.jsx";

function Hero1() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${placeholderImg})`,
      }}
    >
      <div className="hero-content text-center">
        <div className="max-w-lg ml-96">
          <h1 className="mb-5 text-7xl">{HeroSettings.title}</h1>
          <p className="mb-5 text-xl">{HeroSettings.beskrivelse}</p>
          <button className="btn btn-primary btn-md">
            {HeroSettings.knaptekst}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
