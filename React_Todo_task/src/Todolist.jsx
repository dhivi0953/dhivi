import React from 'react'
import  { useState } from 'react'

function Todolist() {
    const[tasks,setTasks] = useState(["Eat Breakfast","Take a shower","walk the dog"]);
    const[newTask,setNewTask] =useState("");
    
    function handleInputChange(event){
        setNewTask(event.target.value);

    }
    function addTask(){
        setTasks(t => [...t,newTask]);
        setNewTask("");

    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((elemen, i)=> i!==index);
        setTasks(updatedTasks);

    }
    // function moveTaskUp(index){
        // if(index > 0){
        //     const updatedTasks = [...tasks];
        //     [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index],updatedTasks[index - 1]];
        //     setNewTask(updatedTasks);
        // }
        // }
    function moveTaskup(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

    function moveTaskDown(index){
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index + 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index + 1]];
            setTasks(updatedTasks);
        }

    }
  return (

    <div className="to-do-lisr">
        <h1>To-Do_List</h1>
        <div>
            <input
            type="text"
            placeholder="enter a task..."
            value={newTask}
            onChange={handleInputChange}/>
    <button
    className='add-button'
    onClick={addTask}>Add</button>        
        </div>
        <ol>
            {tasks.map((task,index)=>
            <li key={index}>
                <span className="text">{task}</span>
                <button
                     className= "delete-button"
                onClick={()=> deleteTask(index)}>Delete</button>
                <button
                className='move-button'
                onClick={()=> moveTaskUp(index)}>Up</button>
                <button
                className='move-button'
                onClick={()=> moveTaskDown(index)}>Down</button>

                            </li>

            )}
        </ol>
        </div>
  )
}

export default Todolist