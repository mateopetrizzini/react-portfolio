import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [open, setOpen]= useState(false);

  return (
    <nav className="navbar">

        <div className="logo">
            <Link to="/">MiSitio</Link>
            </div>

        <div className={`links ${open ? "active" : ""}`}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <button
        className="menu-btn" onClick={()=>setOpen(!open)}>
            ☰
        </button>
        </nav>
  );
}

export default Navbar