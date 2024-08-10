import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ fetchTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
    await axios.post('http://localhost:8080/api/tasks', { title, description });
    setTitle('');
    setDescription('');
    fetchTasks();
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
        
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
