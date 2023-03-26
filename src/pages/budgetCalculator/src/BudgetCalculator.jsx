import React, { useState } from "react";
import NavAnimation from "../../../components/NavAnimation";
import OutputComponents from "./components/OutputComponents";
import "./style.css"

export default function BudgetCalculator() {
  // this is the states section
  const [input, setInput] = useState({
    id: Math.floor(Math.random() * 100000),
    name: "",
    cost: "0",
  });
  const [budget, setBudget] = useState("");
  const [components, setComponents] = useState([]);

  function handleChangeName(e) {
    setInput((prev) => ({ ...prev, name: e.target.value }));
  }
  function handleChangeCost(e) {
    setInput((prev) => ({ ...prev, cost: e.target.value }));
  }
  function handleChangeBudget(e) {
    setBudget(e.target.value);
  }
  function addComponent(e) {
    e.preventDefault();
    setComponents((prev) => [...prev, input]);
    setInput({
      id: Math.floor(Math.random() * 100000),
      name: "",
      cost: "0",
    });
  }
  function deletecomp(id) {
    const updated = components.filter((comp) => comp.id !== id);
    console.log("dele")
    setComponents(updated);
  }
  var totalCost = 0;
  for (let i = 0; i < components.length; i++) {
    totalCost += parseInt(components[i].cost);
  }
  var remaining = budget - totalCost;
  var percentage = Math.floor((remaining / budget) * 100);

  var remaining = budget - totalCost;

  var eachComponent = components.map((component,index) => (
    <div key={index} >
      <OutputComponents
        name={component.name}
        cost={component.cost}
        budget={component.budget}
        id={component.id}
        delete={() => deletecomp(component.id)}
      />
    </div>
  ));

  return (
    <div className="background flex">
      <NavAnimation />
      <h1 className="budget-calculator-h1">BUDGET CALCULATOR</h1>
      <div className="card">
        <div className="info">
          <h3>remaining amount :{remaining}</h3>
          <h3>Remaining percentage : {percentage}</h3>
          <h3>Total cost : {totalCost}</h3>
        </div>
        <div className="budget-input-container">
          <h3> enter you budget</h3>
          <input
            className="budget-input input budget-calc-input"
            placeholder="budget"
            value={budget}
            onChange={handleChangeBudget}
            type="number"
            required
          ></input>
        </div>
        <form className="input-container" onSubmit={addComponent}>
          <input
            className="cost-name budget-calc-input"
            type="text"
            onChange={handleChangeName}
            value={input.name}
            placeholder="Name of Cost"
            required
          />
          <input
            className="cost budget-calc-input"
            type="number"
            onChange={handleChangeCost}
            value={input.cost}
            placeholder="Cost"
            required
          />
          <button type="submit" className="add-exp-button">Add</button>
        </form>
      </div>
      <div className="output-component-container">{eachComponent}</div>
    </div>
  );
}
