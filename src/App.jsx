import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-secondary">Primary</button>
      <div>
        <p>WordPress URL: {process.env.REACT_APP_WORDPRESS_URL}</p>
        <p>Consumer Key: {process.env.REACT_APP_CONSUMER_KEY}</p>
        <p>Consumer Secret: {process.env.REACT_APP_CONSUMER_SECRET}</p>
      </div>
    </>
  );
}

export default App;
