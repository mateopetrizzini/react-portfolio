import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.css";

function Card({title, text, link}) {
  return (
    <div className="card">

        <h3>{title}</h3>

        <p>{text}</p>

        <Link to={link}>
        <button>Ver mas...</button>
        </Link>
        

    </div>
  )
}

export default Card;