import Hero from "../components/Hero/Hero";
import ProduktCarousel from "../components/Produktlogo/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev2 from "../components/Nyhedsbrev/Nyhedsbrev2";
import Feature from "../components/Feature/Feature";
import Bloguddrag from "../components/Blog/Bloguddrag";

function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev2 />
      <Feature />
      <Bloguddrag />
    </div>
  );
}

export default Home;
