import HeroSettings from "./HeroSettings.jsx";

function Hero() {
  return (
    <>
      <section
        className="w-full bg-center bg-cover h-[500px] "
        style={{backgroundImage: `url(${HeroSettings.herobillede})`}}
      >
        <div className="flex items-center justify-center w-full h-full">
          <div className="text-center ">
            <h1 className="">
              {HeroSettings.title}
            </h1>
            <p className="">{HeroSettings.beskrivelse}</p>
            
            <button className="">
              {HeroSettings.knaptekst}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
