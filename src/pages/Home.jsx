import Hero2 from "../components/Hero/Hero2";
import ProduktCarousel from "../components/Produktcarousel/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev2 from "../components/Nyhedsbrev/Nyhedsbrev2";
import Feature from "../components/Feature/Feature";
import Bloguddrag from "../components/Blog/Bloguddrag";
import Katalog from "../components/Katalog/Katalog";
function Home() {
  return (
    <div className="container mx-auto">
      <Hero2 />
      <Katalog />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev2 />
      <Feature />
      <Bloguddrag />
    </div>
  );
}

export default Home;
