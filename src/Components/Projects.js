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
  <section id="projects" className="section projects">
    <h1>My Projects</h1>
    <div className="project-list">
      <div className="project">
        <h3>Project 1</h3>
        <p>Short description of project 1.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Short description of project 2.</p>
      </div>
    </div>
  </section>
);

export default Projects;
