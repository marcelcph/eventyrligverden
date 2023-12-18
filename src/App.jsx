import React from "react";
import "./App.css";
import Url from "./utils/Url";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-secondary">Primary</button>
      <div>
        <p>Consumer Key: {Url.WORDPRESS_WOO_URL}</p>
      </div>
    </>
  );
}

export default App;
