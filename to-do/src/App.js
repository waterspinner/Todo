import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan
} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  //tasks (ToDo List) state
  const [toDo, setToDo] = useState ([
    {"id": 1, "title": "Task 1", "status": false},
    {"id": 2, "title": "Task 2", "status": false}
  ]);

  //Temp state
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add task
  /////////////////////////////////
  const addTask = () => {
    //
  }

  //Delete task
  const deleteTask = (id) => {
    //
  }

  //mark task as done or completed
  const markDone = (id) => {
    //
  }

  //cancelUpdate
  const cancelUpdate = () => {
    //
  }

  //change task for update
  const changeTask = (e) => {
    //
  }

  //update task
  const updateTask = () => {
    //
  } 

  return (
    <div className="contatiner App">
      <br /><br />
      <h2>To Do List App (ReactJS)</h2>
      <br /><br />

    { /*Display ToDos */}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    {toDo && toDo.map((task, index) =>{
      return(
        <React.Fragment key = {task.id}>

          <div className='col taskBg'>

              <div className={task.status ? 'done': ''}>
                <span className='taskText'>{index + 1}</span>
                <span className='taskText'>{task.title}</span>
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
