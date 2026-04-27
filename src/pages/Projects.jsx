import "./Projects.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import LogoPrueba from "../assets/projects/LogoPrueba.png";
import WeatherAppScreen from "../assets/projects/WeatherAppScreen.PNG";
import NotesAppScreen from "../assets/projects/NotesAppScreen.PNG";

function Projects() {

    const projects= [
        {
            title:"Weather App",
            description: "App que muestra el clima usando una API.",
            tech: ["React", "API", "CSS"],
            github: "https://github.com/mateopetrizzini/weather-app",
            demo: "https://weather-app-sable-nu-30.vercel.app/",
            image: WeatherAppScreen
        },
        {
            title: "When2Meet",
            description: "Planner colaborativo con login, recordatorios y coordinación horaria.",
            tech: ["React", "Supabase", "Auth", "Notifications"],
            github: "https://github.com/mateopetrizzini/When2Meet",
            demo:"https://when2-meet.vercel.app/",
            image: NotesAppScreen
        },
        {
            title: "Dashboard",
            description: "Trabajando...",
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