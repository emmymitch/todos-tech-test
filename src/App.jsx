import { useEffect, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import TaskBar from './components/TaskBar/TaskBar';
import TaskCard from './components/TaskCard/TaskCard';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    tasks.push(<TaskCard taskText="Task Text" />);
    setTasks([...tasks]);
  }

  const resetTasks = () => {
    setTasks([]);
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
