import Hero from "../components/Hero/Hero";
import ProduktCarousel from "../components/Produktlogo/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev from "../components/Nyhedsbrev/Nyhedsbrev";
import Feature from "../components/Feature/Feature";

function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev />
      <Feature />
    </div>
  );
}

export default Home;
