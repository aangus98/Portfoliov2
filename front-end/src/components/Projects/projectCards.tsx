import React from 'react';
import "./projectCards.css";

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

const ProjectsPreview: React.FC = () => (
  <div>
    <h1 className="projects-title">Projects</h1>
    <div className="projects-grid">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsPreview;
