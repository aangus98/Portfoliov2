import Headshot from "../../assets/headshot.jpg"
import "./css/basicInfo.css";

const BasicInfo = () => {
    return (
        <div className="basic-info-container">
            <img src={Headshot} alt="Andrew Angus" className="headshot" />
            <h1 className="name">Andrew Angus</h1>
            <h2 className="signature">Andrew J Angus</h2>
            <p>Placeholder for resume</p>  
            <p className="location">Austin, Texas</p>
            <p className="description"> Howdy! I'm currently based in Austin, Texas and have a passion for constructing websites that allow users to unleash their creativity and strategically plan ahead for months. 
                In current production is the garden buddy and Dice Never Deceive applications. 
                The garden buddy application allows users to plan and maintain a garden by giving scheduled reminders on when to water, weed, and trim their plants. 
                The Dice Never Deceive application allows users to structure their campaigns and gives helpful advice on both playing and DMing DND. 
                It allows users to create their own characters onto character sheets and saved as a PDF. 
                <br />
                <br />
                In my free time I'm usually out in the garden, working on woodworking projects, or reading. 
                I also enjoy playing DND with my friends and family.
                I have a deep appreciation for the outdoors and love to explore new trails and parks in the Austin area. 
                If you're interested in collaborating on a project or just want to chat about tech, feel free to reach out!
            </p>         
        </div>
        
    )
}

export default BasicInfo;