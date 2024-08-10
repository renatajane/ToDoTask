import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState({ title: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Resetar erros
    setErrors({ title: '', description: '' });

    // Validação dos campos
    let valid = true;
    const newErrors = { title: '', description: '' };

    if (title.length < 3 || title.length > 50) {
      newErrors.title = 'Title must be between 3 and 50 characters.';
      valid = false;
    }

    if (description.length < 5 || description.length > 200) {
      newErrors.description = 'Description must be between 5 and 200 characters.';
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Enviar dados se válido
    await axios.post(
      'https://localhost:56429/api/tasks', 
      {
        title,
        description,
        isCompleted
      },
      {
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json'
        }
      }
    )
    .then(response => {
      console.log('Resposta:', response.data);
    })
    .catch(error => {
      console.error('Erro:', error);
    });
    setTitle('');
    setDescription('');
    setIsCompleted(false); // Resetar o checkbox
    //fetchTasks(); // Atualizar a lista de tarefas
  };

  return (
    <div className="task-form">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        {errors.title && <p className="error-message">{errors.title}</p>}
        
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {errors.description && <p className="error-message">{errors.description}</p>}
        
        <label htmlFor="isCompleted">Complete</label>
        <input
          id="isCompleted"
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
