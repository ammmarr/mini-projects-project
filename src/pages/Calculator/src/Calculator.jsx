import React from "react";
import "./style.css";
import NavAnimation from "../../../components/NavAnimation";
import { AnimatePresence } from "framer-motion";
export default function Calculator() {
  const [result, setResult] = React.useState("press AC to turn On");

  function handleClick(e) {
    if (result === "press AC to turn On") {
      return null;
    } else {
      setResult((prev) => prev.concat(e.target.name));
    }
  }

  function clearAll() {
    setResult("");
  }

  function backSpace() {
    if (result === "press AC to turn On") {
      return null;
    } else {
      setResult((prev) => prev.slice(0, prev.length - 1));
    }
  }
  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("ERROR,PRESS AC TO START OVER!");
    }
  }

  return (
    <AnimatePresence>
      <NavAnimation />
      <div className="background">
        <div className="container ">
          <form>
            <input
              id="screen"
              className="btn"
              value={result}
              type="text"
              readOnly
            />
          </form>
          <div className="keyPad">
            <button
              id="ac"
              className="btn"
              onClick={clearAll}
            >
              Ac
            </button>
            <button
              className="btn"
              onClick={backSpace}
            >
              C
            </button>
            <button
              name="/"
              className="btn"
              onClick={handleClick}
            >
              &divide;
            </button>
            <button
              name="7"
              className="btn"
              onClick={handleClick}
            >
              7
            </button>
            <button
              name="8"
              className="btn"
              onClick={handleClick}
            >
              8
            </button>
            <button
              name="9"
              className="btn"
              onClick={handleClick}
            >
              9
            </button>
            <button
              name="*"
              className="btn"
              onClick={handleClick}
            >
              &times;
            </button>
            <button
              name="4"
              className="btn"
              onClick={handleClick}
            >
              4
            </button>
            <button
              name="5"
              className="btn"
              onClick={handleClick}
            >
              5
            </button>
            <button
              name="6"
              className="btn"
              onClick={handleClick}
            >
              6
            </button>
            <button
              name="-"
              className="btn"
              onClick={handleClick}
            >
              &ndash;
            </button>
            <button
              name="1"
              className="btn"
              onClick={handleClick}
            >
              1
            </button>
            <button
              name="2"
              className="btn"
              onClick={handleClick}
            >
              2
            </button>
            <button
              name="3"
              className="btn"
              onClick={handleClick}
            >
              3
            </button>
            <button
              name="+"
              className="btn"
              onClick={handleClick}
            >
              +
            </button>
            <button
              name="0"
              className="btn"
              onClick={handleClick}
            >
              0
            </button>
            <button
              name="."
              className="btn"
              onClick={handleClick}
            >
              .
            </button>
            <button
              id="equal"
              className="btn"
              onClick={calculate}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}
