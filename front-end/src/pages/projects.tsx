import Header from "../components/header"
import ProjectsPreview from "../components/Projects/projectCards"
import Footer from "../components/footer";

const Projects = () => {
    return (
        <div className="projects-page">
           <Header />
           <ProjectsPreview />
           <Footer />
        </div>
    )
}

export default Projects;