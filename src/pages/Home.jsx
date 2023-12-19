import React from "react";
import Hero2 from "../components/Hero/Hero2";
import ProduktCarousel from "../components/Produktlogo/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev from "../components/Nyhedsbrev/Nyhedsbrev";
import Nav from "../components/Header/Nav";
import Banner from "../components/Header/Banner";
import Footer2 from "../components/footer/Footer2";
import Feature from "../components/Feature/Feature";
function Home() {
  return (
    <div className=" !mx-auto w-full ">
      <Banner />
      <Nav />
      <Hero2 />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev />
      <Feature />
      <Footer2 />  
    </div>
  );
}

export default Home;
