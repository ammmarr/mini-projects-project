import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import Welcome from "../pages/welcomePage/Welcome";
import Weather from "../pages/Weather/src/Weather"
import Tenzies from "../pages/tenzies/src/Tenzis"
import Counter from "../pages/counter/Counter";
import RandomQuote from "../pages/randomQuote/src/RandomQuote";
import Quiz from "../pages/quiz/src/Quiz";
import Pomodoro from "../pages/pomodoro/src/Pomodoro";
import Markdown from "../pages/markdown/src/Markdown";
import BudgetCalculator from "../pages/budgetCalculator/src/BudgetCalculator";
import DrumMachine from "../pages/drum machine/src/DrumMachine";
import Calculator from "../pages/Calculator/src/Calculator";
import { AnimatePresence } from "framer-motion";

export default function Routess() {
    const location  = useLocation()
  return (
    <AnimatePresence mode="wait">
    <Routes
       key={location.pathname}
      location={location}
    >
      <Route
        path="/"
        element={<Welcome />}
      />
      <Route
        path="/weather"
        element={<Weather />}
      />
      <Route
        path="/tenzies"
        element={<Tenzies />}
      />
      <Route
        path="/counter"
        element={<Counter />}
      />
      <Route
        path="/random-quote"
        element={<RandomQuote />}
      />
      <Route
        path="/quiz"
        element={<Quiz />}
      />
      <Route
        path="/pomodoro"
        element={<Pomodoro />}
      />
      <Route
        path="/markdown"
        element={<Markdown />}
      />
      <Route
        path="/budget-calculator"
        element={<BudgetCalculator />}
      />
      <Route
        path="/drum-machine"
        element={<DrumMachine />}
      />
      <Route
        path="/calculator"
        element={<Calculator />}
      />
    </Routes>
    </AnimatePresence>
  );
}
