import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { IoLogoGitlab } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import "./css/devTools.css"; // Make sure to create this CSS file for styling


const DevTools = () => {
    return (
        <div className="dev-tools">
            <h1>Dev Tools</h1>
            <div className="devToolsIcons">
                <VscVscode className="icon" size={100} title="VS Code" />
                <FaGithub className="icon" size={100} title="Github" />
                <IoLogoGitlab className="icon" size={100} title="GitLab" />
                <SiVite className="icon" size={100} title="Vite" />
            </div>
        </div>
    );
}

export default DevTools;