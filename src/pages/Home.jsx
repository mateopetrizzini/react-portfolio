import Card from '../components/Card/Card';
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {

    const techStack = [
        "React",
        "JavaScript",
        "CSS",
        "HTML",
        "Git",
        "Supabase",
        "Responsive Design",
    ];

  return (
    
        <>
        
        <section className="hero">

            <div className="hero-glow"></div>

            <div className="hero-content">
                <span className="hero-badge">
                    Open to Remote Opportunities
                </span>

                <h1>
                    Hi, I'm Matt.
                </h1>

                <h2>
                    Frontend Developer building modern web apps.
                </h2>

                <p>
                    Focused on React, clean UI, responsive design,
                    and creating products people enjoy using.
                </p>

                <div className="hero-buttons">
                    <Link to="/projects" className="hero-btn primary">
                        View Projects
                    </Link>

                    <Link to="/contact" className="hero-btn secondary">
                        Contact Me
                    </Link>
                    
                </div>
            </div>

        </section>

        <section className="home-section">
            <div className="section-box">

                <h2>About Me</h2>

                <p>
                    I'm a self-taught frontend developer passionate about
                    transforming ideas into polished and functional web experiences.
                    I enjoy learning by building real projects.
                </p>

            </div>
        </section>

        <section className="home-section">
            <div className="section-box">

                <h2>Tech Stack</h2>

                <div className="tech-list">
                    {techStack.map((tech, index) => (
                        <span key={index}>{tech}</span>
                    ))}
                </div>
            </div>
        </section>

        <section className="home-section">
            <div className="section-box featured-box">
                <h2>Featured Project</h2>

                <h3>When2Meet</h3>

                <p>
                    Collaborative planner with authentication,
                    reminders, shared notes and timezone coordination.
                </p>

                <Link to="/projects" className="section-link">
                See All Projects →
                </Link>
            </div>
        </section>

        <section className="home-section">
            <div className="section-box">
                <h2>Experiments</h2>

                <p>
                    Small projects and creative ideas built to test new concepts,
                    improve skills, and explore frontend development.
                </p>

                <Link to="/experiments" className="section-link">
                    View Experiments →
                </Link>
            </div>
        </section>

        <section className="cta-section">
            <h2>Interested in working together?</h2>

            <p>
                I'm currently open to new opportunities and projects.
            </p>

            <Link to="/contact" className="hero-btn primary">
                    Get In Touch
            </Link>
        </section>
        </>
  );
}

export default Home;