import { Spin } from "hamburger-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
export default function NavBar() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`menu-icon-container ${navIsOpen? "menu-icon-container-open": ""}`}
        onClick={() => setNavIsOpen((prev) => !prev)}
      >
        
        <Spin
          color="black"
          size={20}
          toggled={navIsOpen}
        />
      </div>
      <div className={`nav-container ${navIsOpen ? "nav-open" : ""}`}>
        <div className="logo-user"></div>
        <ul className="nav-links">
          <li
            className="nav-item"
            onClick={() => navigate("/")}
          >
            <p>Home</p>
          </li>

          <li
            className="nav-item"
            onClick={() => navigate("/markdown")}
          >
            <p>Markdown previewer</p>
          </li>

          <li
            className="nav-item"
            onClick={() => navigate("/budget-calculator")}
          >
            <p>Budget calculator</p>
          </li>

          <li
            className="nav-item"
            onClick={() => navigate("/weather")}
          >
            <p>weather app</p>
          </li>
          <li
            className="nav-item"
            onClick={() => navigate("/calculator")}
          >
            <p>Calulator</p>
          </li>
          <li
            className="nav-item"
            onClick={() => navigate("/quiz")}
          >
            <p>Quiz</p>
          </li>
          <li
            className="nav-item"
            onClick={() => navigate("/pomodoro")}
          >
            <p>Pomodoro Clock</p>
          </li>
          <li
            className="nav-item"
            onClick={() => navigate("/tenzies")}
          >
            <p>Tenzies</p>
          </li>

          <li
            className="nav-item"
            onClick={() => navigate("/random-quote")}
          >
            <p>Random Quote</p>
          </li>
    

          <li
            className="nav-item"
            onClick={() => navigate("/drum-machine")}
          >
            <p>Drum machine</p>
          </li>

          <li
            className="nav-item"
            onClick={() => navigate("/counter")}
          >
            <p>Counter</p>
          </li>
        </ul>
      </div>
    </>
  );
}
