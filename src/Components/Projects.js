import React from 'react';
import '../Components/Projects.css';

const projects = [
  {
    title: 'eLibrary',
    description: 'This is an internet library with different books. You can read them as a pdf file.',
    github: 'https://github.com/isslxm/eLibraryy.git',
  },
  {
    title: 'VignetteApp',
    description: 'This is a gallery app with photos and videos.',
    github: 'https://github.com/isslxm/vignette-app.git',
  }

]

const Projects = () => (
  <section id="projects" className="projects-section">
    <h1>My Projects</h1>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-info">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
          <div className="project-image">
            <img src={project.image} alt={`${project.title} screenshot`} />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
