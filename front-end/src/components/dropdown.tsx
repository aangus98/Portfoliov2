import React from "react";
import { Link } from "react-router-dom";
import "../css/dropdown.css"

interface DropDownProps {
  options: string[];
}

const DropDown: React.FC<DropDownProps> = ({ options }) => {
  // Map each option to its corresponding route
  const optionLinks: { [key: string]: string } = {
    "About Me": "/about",
    "Projects": "/projects",
    "Experience": "/experience",
    "Contact": "/contact",
  };

  return (
    <div className="dropdown">
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link to={optionLinks[option] || "/"}>
              {option}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
