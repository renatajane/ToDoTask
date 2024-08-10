import React from 'react';
import axios from 'axios';

const TaskItem = ({ task, fetchTasks }) => {
  const handleComplete = async () => {
    await axios.patch(`/api/tasks/${task.id}/complete`);
    fetchTasks();
  };

  const handleDelete = async () => {
    await axios.delete(`/api/tasks/${task.id}`);
    fetchTasks();
  };

  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleComplete} disabled={task.completed}>
        {task.completed ? 'Completed' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
