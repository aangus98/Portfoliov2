import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiApollographql } from "react-icons/si";
import { SiCypress } from "react-icons/si";


const BackEnd = () => {
    return (
        <div className="back-end">
            <h1>Back End Technologies</h1>
            <div className="backEndIcons">
                <FaNodeJs className="icon" size={100} />
                <SiExpress className="icon" size={100} />
                <SiMongodb className="icon" size={100} />
                <BiLogoPostgresql className="icon" size={100} />
                <SiApollographql className="icon" size={100} />
                <SiCypress className="icon" size={100} />
            </div>
        </div>
    );
};

export default BackEnd;