// Removed unused React import
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
    return (
        <header>
           <div className="container">
                <div className="inner-content">
                     <div className="brand">
                          <Link to="/">AA</Link>
                     </div>
                     <div className="modeContainer">
                            <Link to="/mode">Mode</Link>
                      </div>
                        <div className="menu">
                            <Link to="/aboutMe">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/experience">Experience</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                </div>
              </div>            
        </header>
    )
}

export default Header;