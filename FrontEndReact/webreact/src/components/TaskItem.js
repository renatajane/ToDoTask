import React, { useState } from 'react';

const TaskItem = ({ task, fetchTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleComplete = async () => {
    try {
      await fetch(`https://localhost:56429/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isCompleted: true }),
      });
      fetchTasks();
    } catch (error) {
      console.error('Erro ao completar tarefa:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await fetch(`https://localhost:56429/api/tasks/${task.id}`, {
        method: 'DELETE',
      });
      fetchTasks();
    } catch (error) {
      console.error('Erro ao deletar tarefa:', error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://localhost:56429/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: newTitle,
          description: newDescription,
        }),
      });
      setIsEditing(false);
      fetchTasks();
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  return (
    <li className="task-item">
      <div className="task-content">
        {isEditing ? (
          <form onSubmit={handleUpdate} className="edit-form">
            <label htmlFor={`edit-title-${task.id}`}>Enter a new title</label>
            <input
              id={`edit-title-${task.id}`}
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <label htmlFor={`edit-description-${task.id}`}>Enter a new description</label>
            <input
              id={`edit-description-${task.id}`}
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              required
            />
            <div className="form-buttons">
              <button type="submit" className="save-button">Save</button>
              <button type="button" onClick={() => setIsEditing(false)} className="cancel-button">Cancel</button>
            </div>
          </form>
        ) : (
          <>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </>
        )}
      </div>
      <div className="task-actions">
        {isEditing ? null : (
          <>
            <button
              onClick={handleComplete}
              disabled={task.isCompleted}
              className={task.isCompleted ? 'completed-button' : 'complete-button'}
            >
              {task.isCompleted ? 'Completed' : 'Complete'}
            </button>
            <button onClick={handleDelete} className="delete-button">Delete</button>
            <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
