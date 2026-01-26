import "./css/sectionOne.css";
import CentralTime from "./clock";
import AvailabilityDot from "./projectAvailability";

const SectionOne: React.FC = () => {

    const isAvailable = true;

    return (
        <div className="imageContainer">
        <div className="sectionOne">
            <div className="name">
                <h1>Andrew Angus</h1>
            </div>
            <div className="title">
                <h2>Full Stack Developer</h2>
            </div>
            <div className="availability"> 
                <AvailabilityDot available={isAvailable} />
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