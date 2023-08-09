import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';
import { addTask, 
         deleteTask, 
         markDone,
         cancelUpdate,
         changeTask,
         updateTask
   } from './taskFunctions';

function App() {
  //tasks (ToDo List) state
  const [toDo, setToDo] = useState ([
    {"id": 1, "title": "Task 1", "status": true},
    {"id": 2, "title": "Task 2", "status": false}
  ]);

  //Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  const handleAddTask = () => {
    addTask();
  }

  const handleDeleteTask = () => {
    deleteTask();
  }

  const handleMarkDone = () => {
    markDone();
  }

  const handleCancleUpdate = () => {
    cancelUpdate();
  }

  const handleChangeTask = () => {
    changeTask();
  }

  const handleUpdateTask = () => {
    updateTask();
  }

  return (
    <div className="contatiner App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />

    { /*Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    {toDo && toDo.map((toDoItem, index) =>{
      return(
        <React.Fragment key = {toDoItem.id}>

          <div className='col taskBg'>
            
              <div className={toDoItem.status ? 'done': ''}>
                <span className='taskNumber'>{index + 1}</span>
                <span className='taskText'>{toDoItem.title}</span>
              </div>

          </div> 
        </React.Fragment>
      )
      })
    }
    </div>
  );
}

export default App;
