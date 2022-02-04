import React from 'react';
import Task from './Task';
//import { useState } from 'react';

/*const tasks = [
    {
    id: 1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 2:30pm',
    reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Fed 5th at 2:30pm',
        reminder: false
    }
]*/

/*const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Fed 5th at 2:30pm',
            reminder: false
        }
    ])

    return ( <div>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>
          ) )}
    </div>
    )
};*/

//using props
/*const Tasks = (props) => {
  return ( <div>
        {props.tasks.map((task) => (
            <Task key={task.id} task={task}/>
        ))}
  </div>
  )
};*/

//if without Task component use this inside tasks div tag
//<h3 key={task.id}>{task.text} - {task.day}</h3>


//or it can be destructured
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return ( 
    <div>
        {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          ))}
    </div>
    )
  };
  
  //using props
  /*const Tasks = (props) => {
    return ( 
    <div>
        {props.tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={props.onDelete} onToggle={props.onToggle}/>
          ))}
    </div>
    )
  };*/


  //destructured basic without delete
  /*const Tasks = ({ tasks }) => {
    return ( <div>
        {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>
          ))}
    </div>
    )
  };*/

export default Tasks;
