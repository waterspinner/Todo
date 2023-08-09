import Reach, { useState } from 'react';
import Task from './Task';
import './App.css';

function App(){
  //functionality of app
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
      if(newTask.trim === '') return;

      const task = {id: Date.now(), text: newTask, completed: false};
      setTasks([...tasks, task]);
      setNewTask('');
  };

  const completeTask = (taskId) => {
    set
  }

  //Html return
  return (
    <div className='app'>
      <h1>ToDo List App</h1>
      <div className='task-input'>
        <input
          type='text'
          placeholder='Add a new task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <div className='task-list'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
