import React from "react";
import "./App.css";

function App() {
  const WORDPRESS_URL = import.meta.env.VITE_REACT_APP_WORDPRESS_URL;
  console.log(import.meta.env);
  console.log(WORDPRESS_URL);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-secondary">Primary</button>
      <div>
        <p>Consumer Key: {WORDPRESS_URL}</p>
      </div>
    </>
  );
}

export default App;
