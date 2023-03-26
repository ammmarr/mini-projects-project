import React from "react";
import "./style.css";
import NavAnimation from "../../components/NavAnimation";
export default function Counter(props) {
  const [temp, setTemp] = React.useState(1);

  function increment() {
    setTemp((prev) => prev + 1);
  }
  function decrement() {
    setTemp((prev) => prev - 1);
  }
  const stylez = {
    backgroundColor: `hsla(${temp * 2 + 265}, 100%, 50%, 1)`,
  };

  return (
    <div className="background2">
      <NavAnimation />

      <div
        className="hero"
        style={stylez}
      >
        <h1> WITH EACH CLICK THE COLOR change based on tempreture </h1>
        <div className="counter-card">
          <div className="temp">{temp}</div>
          <div className="buttons-container">
            <button
              className="counter-button"
              onClick={increment}
            >
              +1
            </button>
            <button
              className="counter-button"
              onClick={decrement}
            >
              -1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
