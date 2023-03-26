import React from "react";

export default function Session(props) {
  return (
    <div className="section">
      <h3>Adjust your session Time</h3>
      <p className="section-display">
        {props.timeMinSession} :{" "}
        {props.timeSecSession < 10
          ? `0${props.timeSecSession}`
          : props.timeSecSession}
      </p>
      <div className="btns">
        <button class="button-57" onClick={props.incTime} role="button">
          <span class="text">+1</span>
          <span>INCREASE BY ONE</span>
        </button>
        <button class="button-57" onClick={props.decTime} role="button">
          <span class="text">-1</span>
          <span>DECREASE BY ONE</span>
        </button>
      </div>
    </div>
  );
}
