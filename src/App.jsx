import React from "react";
import "./App.css";
import Url from "./utils/Url";
import Hero1 from "./components/Hero/Hero1";
import ProduktCarousel from "./components/Produktlogo/ProduktCarousel";
import Countdown from "./components/Countdown/Countdown";
import Nyhedsbrev from "./components/Nyhedsbrev/Nyhedsbrev";

function App() {
  return (
    <>
      <Hero1 />
      <ProduktCarousel />
      <Countdown />
      <Nyhedsbrev />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-secondary">Primary</button>
      <div>
        <p>Consumer Key: {Url.WORDPRESS_WOO_URL}</p>
      </div>
    </>
  );
}

export default App;
