import React from 'react';

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
  <a href={project.url} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div
      style={{
        border: '1px solid #DDB967',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        backgroundColor: '#799496',
        transition: 'transform 0.2s',
        cursor: 'pointer',
        width: 300,
        height: 300,
        margin: '50px',
        marginLeft: '250px',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  </a>
);

const ProjectsPreview: React.FC = () => (
  <div>
    <h1
    style={
        {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#DDB967',
        }
    }>Projects</h1>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }}
    >
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
);

export default ProjectsPreview;
