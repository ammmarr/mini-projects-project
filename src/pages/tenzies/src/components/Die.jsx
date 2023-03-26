import React from "react";

export default function Die(props) {
  const stylez = {
    backgroundColor: props.isHeld ? "#E0B2E9" : "white",
  };

  return (
    <div
      className="die"
      style={stylez}
      onClick={props.holdDice}
    >
      <h2>{props.value}</h2>
    </div>
  );
}
