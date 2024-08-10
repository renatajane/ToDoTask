import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const handleComplete = async () => {
    await axios.patch(`https://localhost:56429/api/tasks/${task.id}`,
      {
        isCompleted: true
      },
      {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        }
      }
    )
    fetchTasks();
  };

  const handleDelete = async () => {
    await axios.delete(`https://localhost:56429/api/tasks/${task.id}`);
    fetchTasks();
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleComplete} disabled={task.isCompleted}>
        {task.isCompleted ? 'Completed' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
