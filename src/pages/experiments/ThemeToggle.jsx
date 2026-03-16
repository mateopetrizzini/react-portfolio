import { useState } from "react";

function ThemeToggle() {

    const [dark, setDark]= useState(true);

    function toggleTheme(){
        setDark(!dark);
    }

  return (
   
    <section>
        <h1>Theme toggle</h1>

        <p>Experimento Light / Dark Mode</p>

        <button onClick={toggleTheme}>
            Cambiar tema
        </button>

        <div style={{
            marginTop:"2rem",
            padding:"2rem",
            background: dark ? "#111" : "#f2f2f2",
            color: dark ? "white" : "black",
            borderRadius:"10px"
        }}
        >
            <h2>
                {dark ? "Modo oscuro" : "Modo claro"}
            </h2>

            <p>
                Este panel cambia segun el estado del tema.
            </p>
        </div>

    </section>

  )
}

export default ThemeToggle;