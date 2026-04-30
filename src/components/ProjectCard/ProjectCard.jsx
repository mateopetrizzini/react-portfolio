import "./ProjectCard.css";

function ProjectCard({project}) {

  return (

    <article className="project-card">

        <div className="image-wrap">
            {project.badge && (
                <span className="project-badge">
                    {project.badge}
                </span>
            )}

            <img
                src={project.image}
                alt={project.title}
                className="project-image"
            />
        </div>

        <div className="project-content">

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech">
                {project.tech.map((t,i) => (
                    <span key={i}>{t}</span>
                ))}
            </div>
        </div>

        <div className="buttons">

            <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
            >
                GitHub
            </a>

            <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
            >
                Live Demo
            </a>
        </div>

    </article>
  )
}

export default ProjectCard;