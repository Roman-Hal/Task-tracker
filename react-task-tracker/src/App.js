import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    /*{
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
    }*/
])

useEffect(() => {
  /*const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }*/
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
  }

  //fetchTasks();
  getTasks();
}, [])

//Fetch tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();

  return data;
};

// Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data;
};

  /*//Add button
  const addButton = () => {

  }*/

  //Add task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json();

    setTasks([...tasks, data]);

//without server side
    // const id=Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask])
  }

  //Delete Task from server
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Delete Task
  /*const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }*/

  //toggle reminder
  // const toggleReminder = (id) => {
  //   setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  // }

  //toggle reminder server side
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await res.json();

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))

    //setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }


  //showAddTask && is just fast way to do ternary without else statement
  return (
    <Router>
    <div className='container'>
      
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      
      
      <Routes>
      <Route path='/' exact element={ (
        <>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No tasks set!')}
        <Footer />
        </>
      )} />
      <Route path='/about' element={<About />} />
      
      </Routes>
      
      
    </div>
    </Router>
  )
}
/* {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks set!'} */

/*function App() {
  return (
      <div className="App">
        <Header />
      </div>
    );
  }*/

  //using class example
  /*class App extends React.Component {
    render() {
      return <h1>Hello from a class</h1>
    }
  }*/

//example
/*function App() {
const name = ''

  return (
    <div className="App">
      <h1>Hello from react</h1>
      <h2>Hi {name.length>0 ? name : 'NoName'}</h2>
    </div>
  );
}*/

/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/
export default App;
