import "./Projects.css";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import LogoPrueba from "../assets/projects/LogoPrueba.png";
import WeatherAppScreen from "../assets/projects/WeatherAppScreen.PNG";
import NotesAppScreen from "../assets/projects/NotesAppScreen.PNG";
import Reveal from "../components/Reveal/Reveal";

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
            badge: "IN PROGRESS",
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
    <section className="projects-page">

        <div className="projects-hero">

            <span>Portfolio</span>
            <h1>Selected Projects</h1>

            <p>
                Real applications built with focus on design,
                funcionality and user experience.
            </p>
        </div>


        <div className="projects-filters">
            <button className="active">All</button>
            <button>React</button>
            <button>Full Stack</button>
            <button>UI</button>
        </div>

        <div className="projects-grid">

            {projects.map((project, index)=>(
                <Reveal key={index} delay={index * 120}>
                    <ProjectCard project={project}/>
                </Reveal>
            ))}

        </div>
    </section>
  );
}

export default Projects;