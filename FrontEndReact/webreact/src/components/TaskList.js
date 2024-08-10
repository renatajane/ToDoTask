import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('https://localhost:56429/api/tasks',
      {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        }
      }
    )
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} fetchTasks={fetchTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
