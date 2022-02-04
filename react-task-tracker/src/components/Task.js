import React from 'react';
import { FaTimes } from 'react-icons/fa';

//setting up using destructured format
const Task = ({ task, onDelete, onToggle }) => {
  return (
  <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
  </div> 
  )
};

//same setting using props
/*const Task = (props) => {
    return (
    <div className='task'>
        <h3>{props.task.text}</h3>
        <p>{props.task.day}</p>
    </div> 
    )
  };*/

export default Task;
