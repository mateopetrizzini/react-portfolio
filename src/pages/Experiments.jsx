import ExperimentCard from "../components/ExperimentCard/ExperimentCard";
import "./Experiments.css";


function Experiments() {

    const experiments=[
        {
            title: "Theme toggle",
            description: "Cambiar entre modo oscuro y claro",
            link:"/experiments/theme"
        },

        {
            title: "CSS Glass Effect",
            description: "Probando glassmorphism con CSS.",
            link: "/experiments/glass"
        },
        {
            title: "React Counter",
            description: "Ejemplo simple de useState.",
            link: "/experiments/counter"
        },
        {
            title: "Grid Layout Test",
            description: "Pruebas con CSS Grid.",
            link: "/experiments/grid"
        },
        {
            title: "Mini To-Do List",
            description: "Pequena app de tareas con useState.",
            link: "/experiments/todo"
        }
    ];

  return (
   
    <section className="experiments">

        <h1>Experimentos</h1>

        <div className="experiments-grid">
        {experiments.map((exp,i)=>(
            <ExperimentCard key={i} exp={exp}/>
        ))}
        
        </div>

    </section>

  )
}

export default Experiments;