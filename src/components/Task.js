import React from 'react';

function Task({ task }) {
  const handleDelete = () => {
    // Implement a function to remove the task from the list
  };

  return (
    <div>
      <p>{task.text} - {task.category}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
