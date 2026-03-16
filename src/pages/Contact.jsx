import React from 'react'
import "./Contact.css";
import {FaLinkedin, FaGithub, FaDiscord} from "react-icons/fa";
import { useState } from 'react';
import useReveal from '../hooks/useReveal';
//import contactImg from "../assets/contactImg.png"

function Contact() {

  useReveal();

  const [copied, setCopied] = useState(false);

  const copyEmail = ()=>{
    navigator.clipboard.writeText("mateopetrizzini@gmail.com");

    setCopied(true);

    setTimeout(()=>{
      setCopied(false);
    },2000);
  }

  const contacts = [
    {
      name: "LinkedIn",
      text: "Conecta conmigo profesionalmente",
      link: "https://linkedin.com/",
      icon: <FaLinkedin/>,
    },
    {
      name: "Github",
      text: "Mira mis proyectos y codigo.",
      link: "https://github.com",
      icon: <FaGithub/>,
    },
    {
      name: "Discord",
      text: "Unete a mi servidor o contactame.",
      link: "",
      icon: <FaDiscord/>
    }
  ];

  return (
   
    <section className='contact'>

      <h1>Contacto</h1>

      <div className='contact-grid'>

      {contacts.map((contact, index)=>(
        <a
        key={index}
        href={contact.link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card reveal"
        >

          <div className="icon">{contact.icon}</div>

          <h3>{contact.name}</h3>

          <p>{contact.text}</p>

        </a>
      ))}

      <div className="email-box">

        <h2>Email</h2>

        <p>mateopetrizzini@gmail.com</p>

        <button onClick={copyEmail}>
          {copied ? "Email copied!" : "Copy email"}
        </button>
      </div>

       
        {/* <h1>Contact</h1>
        <p>Puedes contactarme aqui.</p>

        <p>Email: mateopetrizzini@gmail.com</p>

        </div>

        <div className="contact-image">
          <img src={contactImg} alt="contact illustration"/> */}
        </div>
        </section>

  )

  
}

export default Contact;