import { FaGithub, FaLinkedin } from 'react-icons/fa';
import "./Footer.css";

function Footer() {    
  return (

    <footer className='footer'>

    <p>© 2026 Mateo Petrizzini</p>

    <div className="footer-links">

        <a href="https://github.com" target="_blank">
        <FaGithub/>
        </a>

        <a href="https://linkedin.com" target="_blank">
        <FaLinkedin/>
        </a>
    </div>

    </footer>
  );
}

export default Footer;
