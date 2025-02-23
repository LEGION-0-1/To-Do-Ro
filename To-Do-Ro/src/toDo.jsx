import React, { useState } from 'react'
function toDo(){
    const [tasks, setTasks] = useState(["Drink Water"]);
    const [done, setDone] = useState([]);
    
    function addTask(){
    
        const newTask = document.getElementById("entry").value;
        document.getElementById("entry").value = "";
        if(newTask !== ""){
            setTasks(t => [...t, newTask]);
        }
    }

    function markDone(index){
        setTasks(tasks.filter((_, i) => i !== index));
        const Completed = tasks.filter((_, i) => i === index);
        if(tasks.length !== 0){
            setDone(d => [...d, Completed]);
        }
    }

    return(
        <div id="to-do">
            <h2>To-Do-List</h2>
            <h3>Pending Tasks</h3>
            <ol>
                {tasks.map((task, index) => 
                <li id="task" key={index} onClick={() => markDone(index)}>{task}</li>)}
            </ol>
            <input id="entry" type="text" placeholder='Enter Task Here'/>
            <button onClick={addTask}>Add task</button>
            <h3>Completed Tasks</h3>
            <ol>
                {done.map((done, index) => 
                <li id="done" key={index} onClick={() => markDone(index)}>{done}</li>)}
            </ol>
        </div>
    );
}
export default toDo