import ProduktCarouselSettings from "./ProduktCarouselSettings.jsx";

function ProduktCarousel() {
  const { logo1, logo2, logo3, logo4 } = ProduktCarouselSettings;

  return (
    <>
      <h1 className="text-center text-6xl ">Produkter</h1>
      <div className="carousel rounded-box">
        <div className="carousel-item max-w-sm">
          <img src={logo1} alt="Placeholder" />
        </div>
        <div className="carousel-item max-w-sm">
          <img src={logo2} alt="Placeholder" />
        </div>
        <div className="carousel-item max-w-sm">
          <img src={logo3} alt="Placeholder" />
        </div>
        <div className="carousel-item max-w-sm">
          <img src={logo4} alt="Placeholder" />
        </div>
      </div>
    </>
  );
}

export default ProduktCarousel;
