import Card from '../components/Card/Card';
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {

    const sections =[
        {
        title: "Proyectos",
        text: "Aplicaciones completas que he desarrollado.",
        link: "/projects"
        },
        {
            title:"Experimentos",
            text:"Pruebas y mini proyectos para aprender.",
            link:"/experiments"
        },
        {
            title:"Contacto",
            text:"Donde encontrarme o contactarme.",
            link:"/contact"
        }
    ];

  return (
    
        <>
        
        <section className="hero">

        <div className="hero-glow"></div>

            <div className="hero-text">

                <h1>Hi, I'm Matt</h1>

                <h2>Frontend Developer</h2>

                <p>
                    Construyo interfaces web interactivas usando React.
                </p>

                <div className="hero-buttons">
                    <Link to="/projects" className="hero-btn">
                    Proyectos
                    </Link>

                    <Link to="/experiments" className="hero-btn">
                    Experimentos
                    </Link>
                </div>

            </div>            

        </section>

        <div className="home-info">

            <div className="about">
                <h2>Acerca de mí</h2>
                <p>Soy un desarrollador Junior Frontend enfocado en construir
                     interfaces modernas con React. Me gusta experimentar 
                     con nuevas ideas y aprender creando pequeños proyectos.
                     </p>
            </div>

            <div className="tech">

                <h2>Tecnologías</h2>

                <div className="tech-list">
                    <span>React</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Git</span>
                </div>

            </div>

            <div className="featured">

                <h2>Proyecto destacado</h2>

                <p>
                    Task Manager App - una aplicacion simple para gestionar tareas creada con React.
                </p>

            </div>

        </div>

        <section className="home">

            <h2>Explora el sitio</h2>

            <div className="card-grid">
                {sections.map((section, index)=>(
                    <Card
                    key={index}
                    title={section.title}
                    text={section.text}
                    link={section.link}
                    />
                ))}
                
            </div>
        </section>
        </>


    // <section className='home'>

    //     <h1>Mi Portfolio</h1>

    //     <div className="card-grid">

    //         {sections.map((section, index)=>(
    //         <Card 
    //         key={index}
    //         title={section.title}
    //         text={section.text}
    //         link={section.link}
    //         />
    //     ))}
    //     </div>
    // </section>



    // <section className="home">
    //     <h1> Mi Portfolio</h1>
       
    //     <div className="card-grid">

    //         <Card 
    //         title="Proyectos"
    //         text="Aplicaciones completas que he desarrollado."
    //         />

    //         <Card 
    //         title="Experimentos"
    //         text="Pruebas y mini proyectos para aprender."
    //         />

    //         <Card 
    //         title="Contacto"
    //         text="Donde encontrarme o contactarme."
    //         />

    //     </div>

    // </section>


  );
}

export default Home;