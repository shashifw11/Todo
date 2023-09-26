import React, { useState } from 'react';

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  const handleAddTask = () => {
    if (inputText.trim() !== '') {
      if (editIndex !== null) {
        // If we are editing a task, update it
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = inputText;
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        // Otherwise, add a new task
        setTasks([...tasks, inputText]);
      }

      setInputText('');
    }
  };

  const handleEditTask = (index) => {
    setInputText(tasks[index]);
    setEditIndex(index);
  };
 

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputText}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask}>
          {editIndex !== null ? 'Edit Task' : 'Add Task'}
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEditTask(index)}>Edit</button>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
