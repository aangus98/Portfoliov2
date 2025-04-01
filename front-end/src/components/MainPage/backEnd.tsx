import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApollographql } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import "./css/backEnd.css"; // Make sure to create this CSS file for styling

const BackEnd = () => {
    return (
        <div className="back-end">
            <h1>Back End Technologies</h1>
            <div className="backEndIcons">
                <FaNodeJs className="icon" size={100} title="node.js" />
                <SiExpress className="icon" size={100} title="express" />
                <SiMongodb className="icon" size={100} title="MongoDB" />
                <BiLogoPostgresql className="icon" size={100} title="PostgreSQL" />
                <SiApollographql className="icon" size={100} title="Apollo" />
                <SiCypress className="icon" size={100} title="Cypress" />
            </div>
        </div>
    );
};

export default BackEnd;