import { useState, useEffect } from "react";
import CountdownSettings from "./CountdownSettings.jsx";
import placeholderImg from "../../assets/images/placeholder.png";

function Countdown() {
  const [countdownValues, setCountdownValues] = useState({
    sekunder: CountdownSettings.sekunder,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdownValues((prevValues) => {
        // Decrease seconds by 1
        const newSeconds = prevValues.sekunder - 1;

        // Check if seconds reached 0
        if (newSeconds < 0) {
          return {
            ...prevValues,
            sekunder: CountdownSettings.sekunder,
          };
        }
        return {
          ...prevValues,
          sekunder: newSeconds,
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={placeholderImg} alt="CountDown billede" />
        </figure>
        <div className="card-body bg-secondary">
          <h2 className="card-title text-center">{CountdownSettings.title}</h2>
          <p>{CountdownSettings.beskrivelse}</p>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": CountdownSettings.dage }}></span>
              </span>
              dage
            </div>
            <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": CountdownSettings.timer }}></span>
              </span>
              timer
            </div>
            <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": CountdownSettings.minuter }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": countdownValues.sekunder }}></span>
              </span>
              sek
            </div>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary">
              {CountdownSettings.knaptekst}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countdown;
