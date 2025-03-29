import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { TbFileTypeCss } from "react-icons/tb";
import { MdHtml } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiVite } from "react-icons/si";


const FrontEnd = () => {
    return (
        <div className="FrontEnd">
            <h1>Front End Technologies</h1>
            <div className="frontEndIcons">
                <IoLogoJavascript className="icon" size={100} />
                <SiTypescript className="icon" size={100} />
                <BsBootstrap className="icon" size={100} />
                <TbFileTypeCss className="icon" size={100} />
                <MdHtml className="icon" size={100} />
                <FaReact className="icon" size={100} />
                <FaPython className="icon" size={100} />
                <SiVite className="icon" size={100} />
            </div>
        </div>
    )
};

export default FrontEnd;