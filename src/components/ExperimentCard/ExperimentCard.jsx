import { Link } from "react-router-dom";
import "./ExperimentCard.css";

function ExperimentCard({exp}) {
  return (

    <Link to={exp.link} className="experiment-link">
    
    <div className='experiment-card'>
        <h3>{exp.title}</h3>
        <p>{exp.description}</p>

    </div>

    </Link>
  )
}

export default ExperimentCard;