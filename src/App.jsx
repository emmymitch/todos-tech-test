import './App.scss';
import Header from './components/Header/Header';
import TaskBar from './components/TaskBar/TaskBar';
import TaskCard from './components/TaskCard/TaskCard';

const App = () => {
 let tasks = [1];

  return (
    <div className="app">
      <Header />
      <TaskBar />

      {tasks.length !== 0 
        ? <TaskCard />
        : <p className='no-cards-text'>Nothing to see here yet... Add a task in the field above! ☝</p>
      }

    </div>
  );
}

export default App;
