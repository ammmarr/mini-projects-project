import React from "react";

export default function Break(props) {
  return (
    <div className="section">
      <h3>Adjust your break time </h3>
      <p className="section-display">
        {props.timeMinBreak} :{" "}
        {props.timeSecBreak < 10
          ? `0${props.timeSecBreak}`
          : props.timeSecBreak}
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
