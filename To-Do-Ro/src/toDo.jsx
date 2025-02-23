import React, { useState } from 'react'
function toDo(){
    const [tasks, setTasks] = useState(["Drink Water"]);
    const [done, setDone] = useState(["Wake up"]);
    
    function addTask(){
    
        const newTask = document.getElementById("entry").value;
        document.getElementById("entry").value = "";
        setTasks(t => [...t, newTask]);
    }

    function markDone(index){
        setTasks(tasks.filter((_, i) => i !== index));
        const Completed = tasks.filter((_, i) => i === index);
        setDone(d => [...d, Completed]);
    }

    return(
        <div>
            <h1>To-Do-List</h1>
            <ol>
                {tasks.map((task, index) => 
                <li id="task" key={index} onClick={() => markDone(index)}>{task}</li>)}
            </ol>
            <input id="entry" type="text" placeholder='Enter Task Here'/>
            <button onClick={addTask}>Add task</button>
            <ol>
                {done.map((done, index) => 
                <li id="done" key={index} onClick={() => markDone(index)}>{done}</li>)}
            </ol>
        </div>
    );
}
export default toDo