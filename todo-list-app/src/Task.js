import React from 'react';

const Task = ({ task, completeTask, deleteTask }) => {
    return (
        <div className='task'>
            <input
            type='checkbox'
            checked={task.completed}
            onChange={() => completeTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
};

export default Task;