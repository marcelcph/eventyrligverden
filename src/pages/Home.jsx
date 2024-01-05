import Hero from "../components/Hero/Hero";
import Hero2 from "../components/Hero/Hero2";
import ProduktCarousel from "../components/Produktcarousel/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev from "../components/Nyhedsbrev/Nyhedsbrev";
import Nyhedsbrev2 from "../components/Nyhedsbrev/Nyhedsbrev2";
import Feature from "../components/Feature/Feature";
import Bloguddrag from "../components/Blog/Bloguddrag";
import Katalog from "../components/Katalog/Katalog";
function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Hero2 />
      <Katalog />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev />
      <Nyhedsbrev2 />
      <Feature />
      <Bloguddrag />
    </div>
  );
}

export default Home;
