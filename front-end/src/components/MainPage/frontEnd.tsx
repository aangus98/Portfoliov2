import { SiTypescript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbFileTypeCss } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import "./css/frontEnd.css"; // Make sure to create this CSS file for styling
import { SiJavascript } from "react-icons/si";

const FrontEnd = () => {
    return (
        <div className="FrontEnd">
            <h1>Front End Technologies</h1>
            <div className="frontEndIcons">
                <SiJavascript className="icon" size={100} title="JavaScript" />
                <SiTypescript className="icon" size={100} title="TypeScript" />
                <BsBootstrap className="icon" size={100} title="Bootstrap" />
                <TbFileTypeCss className="icon" size={100} title="CSS" />
                <MdHtml className="icon" size={100} title="HTML" />
                <FaReact className="icon" size={100} title="React" />
                <FaPython className="icon" size={100} title="Python" />
            </div>
        </div>
    );
};

export default FrontEnd;
