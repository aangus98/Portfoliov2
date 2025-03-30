import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";
import { SiVite } from "react-icons/si";


const DevTools = () => {
    return (
        <div className="dev-tools">
            <h2>Dev Tools</h2>
            <div className="devToolsIcons">
                <VscVscode className="icon" size={100} />
                <FaGithub className="icon" size={100} />
                <IoLogoGitlab className="icon" size={100} />
                <SiVite className="icon" size={100} />
            </div>
        </div>
    );
}

export default DevTools;