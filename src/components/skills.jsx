import React, { useState, useEffect } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);

  // Fetch skills data from the backend
  useEffect(() => {
    fetch('https://react-project-3-vc6l.onrender.com/api/skills')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(err => console.error('Error fetching skills:', err));
  }, []);

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.length > 0 ? (
          skills.map(skill => (
            <div key={skill._id} className="skill">
              <h3>{skill.name}</h3>
              <p>Proficiency: {skill.proficiency}</p>
            </div>
          ))
        ) : (
          <p>No skills available</p>
        )}
      </div>
    </div>
  );
}

export default Skills;
