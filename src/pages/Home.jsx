import React from 'react'
import Hero2 from "../components/Hero/Hero2";
import ProduktCarousel from "../components/Produktlogo/ProduktCarousel";
import Countdown from "../components/Countdown/Countdown";
import Nyhedsbrev from "../components/Nyhedsbrev/Nyhedsbrev";

function Home() {
  return (
    <div className="!container !mx-auto ">
      <Hero2 />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev />
      </div>
  )
}

export default Home