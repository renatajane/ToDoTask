import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">To-Do List</h1>
      <div className="task-form">
        <TaskForm />
      </div>
      <div className="task-list">
        <TaskList />
      </div>
    </div>
  );
};

export default App;
