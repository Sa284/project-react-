import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../JS/Actions/actions";

function Task({ task }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const[description,setDescription] = useState(task.description)
    const handleSubmit= (e) => {
        e.preventDefault();
        dispatch(editTask(task.id,description))
        setIsEditing(false)
    }
  return (
    <div>
{!isEditing ? 
    
    (<div>
      <input type="checkbox" checked={task.isDone} />
      <span>{task.description}</span>
      <button onClick={() =>setIsEditing(true) }>Edit</button>
      <button onClick={()=> dispatch(deleteTask(task.id))}>Delete</button>
    </div>) : (

        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            <button>Save</button>
        </form>
    )}
    </div>
  );
}

export default Task;
