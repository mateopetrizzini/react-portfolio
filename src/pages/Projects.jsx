import "./Projects.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import LogoPrueba from "../assets/projects/LogoPrueba.png"

function Projects() {

    const projects= [
        {
            title:"Weather App",
            description: "App que muestra el clima usando una API.",
            tech: ["React", "API", "CSS"],
            github: "#",
            demo: "https://weather-app-sable-nu-30.vercel.app/",
            image: LogoPrueba
        },
        {
            title: "Task Manager",
            description: "Aplicacion para gestionar tareas.",
            tech: ["React", "LocalStorage"],
            github: "#",
            demo:"#",
            image: LogoPrueba
        },
        {
            title: "Portfolio v1",
            description: "Mi primer portfolio personal.",
            tech: ["React", "Grid"],
            github: "#",
            demo: "#",
            image: LogoPrueba
        }
    ];

  return (
    <section className="projects">
        <h1>Proyectos</h1>

        <div className="projects-grid">

            {projects.map((project, index)=>(
                <ProjectCard
                key={index}
                project={project}
                />
            ))}

        </div>
    </section>
  );
}

export default Projects;