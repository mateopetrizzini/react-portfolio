import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

  return (
    
    <section>
        <h1>React Counter</h1>

        <p>Este experimento muestra como funciona useState</p>

        <div style={{marginTop:"2rem"}}>
            <button onClick={()=> setCount(count -1)}>
                -
            </button>

            <span style={{margin:"0 1rem", fontSize:"2rem"}}>
                {count}
            </span>

            <button onClick={()=> setCount(count +1)}>
                +
            </button>

        </div>

    </section>

  )
}

export default Counter;