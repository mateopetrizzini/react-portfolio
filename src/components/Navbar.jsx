import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    const [open, setOpen]= useState(false);

    const closeMenu = () => setOpen(false);
    
  return (
    <nav className="navbar">
        
        <div className="navbar-inner">
        <div className="logo">
            <Link to="/">Matt.dev</Link>
            </div>

        <div className={`links ${open ? "active" : ""}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/projects" onClick={closeMenu}>Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>

        <button
        className="menu-btn" onClick={()=>setOpen(!open)}>
            {open ? "X" : "☰"}
        </button>

        </div>
    </nav>
  );
}

export default Navbar