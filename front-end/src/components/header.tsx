import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import Menu from "./menu";

const Header = () => {
  // Default is dark mode since your :root variables are for dark mode.
  const [darkMode, setDarkMode] = useState(true);

  const toggleMode = () => {
    setDarkMode(prev => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">AA</Link>
          </div>
          <div className="menu">
            <Menu />
          </div>
          <div className="modeContainer">
            <label className="switch">
              <input type="checkbox" checked={!darkMode} onChange={toggleMode} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
