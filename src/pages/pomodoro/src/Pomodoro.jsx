import React from "react";
import Session from "./components/Session";
import Break from "./components/Break";
import "./style.css"
import NavAnimation from "../../../components/NavAnimation";

export default function Pomodoro() {
  //this is the functionality of the break section
  const [timeMinBreak, setTimeMinBreak] = React.useState(5);
  const [timeSecBreak, setTimeSecBreak] = React.useState(0);
  const [active, setActive] = React.useState(false);

  function incTimeBreak() {
    setTimeMinBreak((prev) => prev + 1);
  }
  function decTimeBreak() {
    if (timeMinBreak > 1) {
      setTimeMinBreak((prev) => prev - 1);
    } else {
      return;
    }
  }
  //this is the functionality of the session section
  const [timeMinSession, setTimeMinSession] = React.useState(25);
  const [timeSecSession, setTimeSecSession] = React.useState(0);

  function incTimeSession() {
    setTimeMinSession((prev) => prev + 1);
  }
  function decTimeSession() {
    if (timeMinSession > 1) {
      setTimeMinSession((prev) => prev - 1);
    } else {
      return;
    }
  }
  // which to display
  const [WhichDisplay, setWhichDisplay] = React.useState(false);

  if (timeMinSession === 0 && timeSecSession === 0) {
    setWhichDisplay((prev) => !prev);
   setTimeMinSession(30);

    if (timeSecBreak >= 0) {
      setInterval(() => {
        setTimeSecBreak((prev) => prev - 1);
      }, 1000);
    } else {
      return;
    }
console.log(timeMinBreak,timeMinSession,timeSecBreak,timeSecSession)
    // this if is really tricky

    var display;
    if (WhichDisplay === true){
      display = (
        <h1>
          {timeMinBreak} :{" "}
          {timeSecBreak < 10 ? `0${timeSecBreak}` : timeSecBreak}
        </h1>
      );
    } else if (WhichDisplay === false) {
      display = (
        <h1>
          {timeMinSession} :{" "}
          {timeSecSession < 10 ? `0${timeSecSession}` : timeSecSession}
        </h1>
      );
    }
  }

  if (WhichDisplay === true) {
    display = (
      <h1>
        {timeMinBreak} : {timeSecBreak < 10 ? `0${timeSecBreak}` : timeSecBreak}
      </h1>
    );
  } else if (WhichDisplay === false) {
    display = (
      <h1>
        {timeMinSession} :{" "}
        {timeSecSession < 10 ? `0${timeSecSession}` : timeSecSession}
      </h1>
    );
  }
  if (timeSecBreak === -1) {
    setTimeSecBreak(59);
    setTimeMinBreak((prev) => prev - 1);
  }
  function startTimer() {
    setActive(true);
    let sec = timeSecSession;
    if (sec >= 0) {
      setInterval(() => {
        setTimeSecSession((prev) => prev - 1);
      }, 1000);
    } else {
      return;
    }
  }
  // this if is really tricky

  if (timeSecSession === -1) {
    setTimeSecSession(59);
    setTimeMinSession((prev) => prev - 1);
  }

  return (
    <div className="background">
      <NavAnimation />

      <div className="timer-container">

        <span className="timer">{display}</span>
        <button className="start-btn" onClick={startTimer}>
          start
        </button>
      </div>
      <div className="sess-br-container">
        {active === false && (
          <Session
            incTime={incTimeSession}
            decTime={decTimeSession}
            timeMinSession={timeMinSession}
            timeSecSession={timeSecSession}
          />
        )}
        {active === false && (
          <Break
            incTime={incTimeBreak}
            decTime={decTimeBreak}
            timeMinBreak={timeMinBreak}
            timeSecBreak={timeSecBreak}
          />
        )}
      </div>
      <footer className="footer">Hint: to start over refresh the page</footer>
    </div>
  );
}
