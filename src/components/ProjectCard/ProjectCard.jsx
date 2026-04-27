import "./ProjectCard.css";

import React from 'react'

function ProjectCard({project}) {

  return (
    <div className="project-card">
        {project.badge && (
            <span className="project-badge">
                {project.badge}
            </span>
        )}
        <img src={project.image}
        alt={project.title}
        className="project-image"
        />
        
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech">
            {project.tech.map((t,i)=>(
                <span key={i}>{t}</span>
            ))}
        </div>

        <div className="buttons">
            <a href={project.github} target="_blank">
                Github
            </a>

            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
            </a>
            
        </div>
    </div>
  )
}

export default ProjectCard;