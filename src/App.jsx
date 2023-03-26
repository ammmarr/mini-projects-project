import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/Navbar";
import Routess from "./utilities/Routes";
function App() {
  return (
    <BrowserRouter basename="/mini-projects-project">
        <NavBar />
      <Routess />
    </BrowserRouter>
  );
}

export default App;
