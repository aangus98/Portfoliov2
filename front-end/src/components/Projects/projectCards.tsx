import React, { useRef } from 'react';
import "./projectCards.css";
import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  { id: 1, title: 'Project One', description: 'Description for project one.', url: '/project-one' },
  { id: 2, title: 'Project Two', description: 'Description for project two.', url: '/project-two' },
  { id: 3, title: 'Project Three', description: 'Description for project three.', url: '/project-three' },
  { id: 4, title: 'Project Four', description: 'Description for project four.', url: '/project-four' },
  { id: 5, title: 'Project Five', description: 'Description for project five.', url: '/project-five' },
  { id: 6, title: 'Project Six', description: 'Description for project six.', url: '/project-six' },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <a href={project.url} className="project-link">
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </a>
);

const ProjectsPreview: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev: number) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="carousel-wrapper">
        <h1 className="projects-title">Projects</h1>
        <div className="carousel-container">
          <button onClick={handlePrev} className="carousel-button">‹</button>
          <div className="carousel-slide">
            <div
              className="carousel-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="carousel-button">›</button>
        </div>
      </div>
    </>
  );
};



export default ProjectsPreview;