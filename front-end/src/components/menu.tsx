import React, { useState } from "react";
import DropDown from "./MainPage/dropdown";

const Menu: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const options: string[] = ["About Me", "Projects", "Experience", "Contact"];

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu">
      <button onClick={handleClick}>Menu</button>
      {showMenu && <DropDown options={options} />}
    </div>
  );
};

export default Menu;
