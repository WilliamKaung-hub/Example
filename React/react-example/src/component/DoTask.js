"use client"

import { useState } from "react";

export default function DoTask(){
const{ task, setTask} = useState("");
const{ newTask,setNewTask} = useState([]);

const addTask = () => {
    if(newTask.trim()){
        setTask([...task,newTask]);
        setNewTask(""); 
    }
};
return(
<div>
<input
value={task}
onChange={(e)=> setTask(e.target.value)}
    />
<button type="button" onClick={addTask}>button</button>
</div>
);
}

