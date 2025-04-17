import './jobHistory.css';

const Experience = () => {
    return (
        <div className="experience-container">
            <h1>Experience</h1>
        <div className="experience-page">
            <div className="bootcamp">
                <h2>Full Stack Web Development Bootcamp</h2>
                <h3>University of Texas at San Antonio</h3>
                <p className="graduated">Graduated: January 2025</p>
                <p className="skills">Skills Acquired: HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL</p>
            </div>
            <div className="middle-school">
                <h2>Middle School Social Studies Teacher</h2>
                <h3>Bailey Middle School</h3>
                <p className="dates">August 2023-July 2024</p>
                <p className="description">Taught 6th and 7th grade social studies, focusing on history and geography. Developed engaging lesson plans and utilized technology to enhance student learning. Managed a classroom of 25-30 students, fostering a positive and inclusive environment.</p>
        </div>
        <div className="data-entry">
            <h2>Data Entry Specialist</h2>
            <h3>Cherokee Federal</h3>
            <p className="dates">May 2023-August 2023</p>
            <p className="description">Responsible for entering and updating data in the company's database. 
            Ensured accuracy and completeness of information while meeting tight deadlines. 
            Collaborated with team members to streamline data entry processes and improve efficiency.</p>
        </div>
        <div className="manager">
            <h2>Site Manager</h2>
            <h3>Cherokee Federal</h3>
            <p className="dates">Nov 2022-May 2023</p>
            <p className="description">Managed a team of up to 70 employees, overseeing daily operations and ensuring high levels of productivity.</p>
        </div>
        <div className="clerk">
            <h2>Data Entry Clerk</h2>
            <h3>TEEMA</h3>
            <p className="dates">May 2022-Nov 2022</p>
            <p className="description">Performed data entry tasks with a focus on accuracy and attention to detail.
            Assisted in maintaining the integrity of the company's database by verifying and correcting data as needed.</p>
        </div> 
    </div>
    <p>Additional information available upon request</p>
</div>
    );
}

export default Experience;