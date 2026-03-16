import { useState } from "react";

function Todo() {

    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);

    function addTask(){

        if(task.trim()==="") return;
        setTasks([...tasks, task]);

        setTask("");    
    }

    function deleteTask(index){
        const newTasks = tasks.filter((_,i)=> i !==index);
        setTasks(newTasks);
    }

  return (
    
    <section>
        <h1>Mini To-Do List</h1>

        <div style={{marginTop:"1rem"}}>

            <input value={task}
            onChange={(e)=> setTask(e.target.value)}
            placeholder="Nueva tarea..."
            />

            <button onClick={addTask}>
                Agregar
            </button>

        </div>

        <ul style={{marginTop:"2rem"}}>
            {tasks.map((t,i)=>(
                <li key={i}>
                    {t}
                    <button
                    onClick={()=>deleteTask(i)}
                    style={{marginLeft:"10px"}}
                    >
                        X
                    </button>

                </li>
            ))}

        </ul>
    </section>

  )
}

export default Todo;