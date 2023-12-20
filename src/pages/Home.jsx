import React from "react";
import Hero2 from "../components/Hero/Hero2";
import ProduktCarousel from "../components/Produktlogo/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev from "../components/Nyhedsbrev/Nyhedsbrev";
import Feature from "../components/Feature/Feature";
function Home() {
  return (
    <div className=" !mx-auto w-full ">
      <Hero2 />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev />
      <Feature />
        
    </div>
  );
}

export default Home;
