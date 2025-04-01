import "./css/sectionOne.css";
import Headshot from "../../assets/headshot.jpg";
import CentralTime from "./clock";

const SectionOne: React.FC = () => {

    const isAvailable = true;

    return (
        <div className="imageContainer">
            <div className="headshot">
                <img src={Headshot} alt="headshot" />
            </div>
        <div className="sectionOne">
            <div className="name">
                <h1>Andrew Angus</h1>
            </div>
            <div className="title">
                <h2>Full Stack Developer</h2>
            </div>
            <div className={`availability ${isAvailable ? "available" : "not-available"}`}>
                <h2>
                 {isAvailable
                 ? "Andrew is available for projects"
                  : "Andrew is not available for projects"}
                </h2>
            </div>
            <div className="description">
                <p>Based in Austin, Texas who is detail-orientated and able to construct fullstack applications from scratch to production. 
                    <br />
               Currently I'm building some passion projects and looking to break into the industry
                </p>
            </div>
            <div className="time">
                <CentralTime  />
            </div>
        </div>
        </div>
    )
}

export default SectionOne;