import React, { useState, useEffect } from 'react';


function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch project data from the backend
  useEffect(() => {
    fetch('https://react-project-3-vc6l.onrender.com/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(err => console.error('Error fetching projects:', err));
  }, []);

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map(project => (
            <div key={project._id} className="project">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies.join(', ')}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">Github</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
}

export default Projects;
