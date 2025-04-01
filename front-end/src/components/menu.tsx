import React, { useState } from "react";
import "../css/menu.css"
import DropDown from "./dropdown";

interface Option {
  label: string;
  path: string;
}

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const options: Option[] = [
    { label: "About Me", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Contact", path: "/contact" }
  ];

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu">
      <button className="hamburger-button" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {showMenu && <DropDown options={options.map(option => option.label)} />}
    </div>
  );
};

export default Menu;

