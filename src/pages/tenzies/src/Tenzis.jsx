import { nanoid } from "nanoid";
import React from "react";
import Die from "./components/Die";
import "./style.css";
import NavAnimation from "../../../components/NavAnimation";

export default function Tenzies() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzis] = React.useState(false);

  React.useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld === true);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzis(true);
      console.log("you won");
    }
  }, [dice]);

  function generateDie() {
    return { value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid() };
  }

  function allNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateDie());
    }
    return newDice;
  }
  function holdDice(id) {
    setDice((prev) =>
      prev.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      }),
    );
  }

  const eachDice = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  function rollDice() {
    if (tenzies === false) {
      setDice((prev) =>
        prev.map((die) => {
          return die.isHeld ? die : generateDie();
        }),
      );
    } else {
      setTenzis(false);
      setDice(allNewDice());
    }
  }

  return (
    <div className="background">
      <NavAnimation />

      <div className="tenz-container">
        <h1>Tenzies</h1>
        <div className="dice-container">{eachDice}</div>
        <div className="buttons-container">
          <button    className="tenzies-button" onClick={rollDice}>{tenzies ? "new game" : "Roll"}</button>
          <button
            className="tenzies-button"
            onClick={() => setDice(allNewDice)}
          >
            Regenerate
          </button>
        </div>
      </div>
    </div>
  );
}
