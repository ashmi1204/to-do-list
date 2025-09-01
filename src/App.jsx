import { useState } from "react";

function ToDo(){
  const [tasks,setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event){
    setNewTask(event.target.value);
  }
  function addTask(){
    if(newTask.trim() !== ""){
      setTasks([...tasks,newTask]);
      setNewTask("");
    }
    
  }
  function deleteTask(index){
    const updated = tasks.filter((task,i)=> i !== index);
    setTasks(updated);
  }
  function moveUp(index){
    if(index>0){
      const updated = [...tasks];
      [updated[index],updated[index - 1]] = [updated[index - 1],updated[index]];
      setTasks(updated);
    }
  }
  function moveDown(index){
    const updated = [...tasks];
    if(index<updated.length-1){
      [updated[index],updated[index + 1]] = [updated[index + 1],updated[index]];
      setTasks(updated);
    }
  }
  return(<div>
    <h1 className="headline">To Do List</h1>
    <input type="text" className="input-field" placeholder="Enter a task" value={newTask} onChange={handleChange}></input>
    <button className="add-button" onClick={addTask}>Add</button>
    <ol>
      {tasks.map((element,index) => 
      <li className="list-items" key = {index}>
        <span className="task">{element}</span>
        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
        <button className="move-up-button" onClick={()=> moveUp(index)}>👆</button>
        <button className="move-down-button" onClick = {()=> moveDown(index)}>👇</button>
      </li>
      )}
    </ol>
  </div>)
}
export default ToDo;