import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskBar from './components/TaskBar/TaskBar';
import TaskCard from './components/TaskCard/TaskCard';

let taskList = [];

const App = () => {
  const [tasks, setTasks] = useState([]);

  const deleteTask = (event) => {
    const taskId = event.target.parentElement.id;

    for (let i=0; i<taskList.length; i++){
      if (taskList[i].key === taskId){
        taskList.splice(i, 1);
      }
    }

    setTasks([...taskList]);
  };

  const addTask = (event) => {
    const taskText = event.target.previousSibling.value;

    if (taskText){
      taskList.push(<TaskCard key={taskText} taskText={taskText} deleteTask={deleteTask} />);

      setTasks([...taskList]);
      event.target.previousSibling.value = "";

    //If no input in textbox
    } else{
      alert("Please enter a todo");
    }
  }

  const resetTasks = () => {
    taskList = [];
    setTasks([...taskList]);
  }

  return (
    <div className="app">
      <Header resetTasks={resetTasks} />
      <TaskBar addTask={addTask} />

      {tasks.length !== 0 
        ? tasks
        : <p className='no-cards-text'>Nothing to see here yet... Add a task in the field above! ☝</p>
      }

    </div>
  );
}

export default App;
