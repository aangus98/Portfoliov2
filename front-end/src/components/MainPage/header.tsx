// Removed unused React import
import { Link } from "react-router-dom";
import "./css/header.css";
import Menu from "./menu";

const Header = () => {
    return (
        <header>
           <div className="container">
                <div className="inner-content">
                     <div className="brand">
                          <Link to="/">AA</Link>
                     </div>
                     <div className="modeContainer">
                            <Link to="/mode">☀️</Link>
                      </div>
                        <div className="menu">
                            <Menu />
                        </div>
                </div>
              </div>            
        </header>
    )
}

export default Header;