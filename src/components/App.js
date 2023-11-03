import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import TaskList from './TaskList';
import NewTaskForm from './NewTaskForm';

function App() {
  const [tasks, setTasks] = useState([
    // Your task data array
  ]);
  const categories = [
    'All', 'Category1', 'Category2', 'Category3', // Add your categories
  ];

  return (
    <div>
      <CategoryFilter categories={categories} />
      <TaskList tasks={tasks} />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={(newTask) => {
          // Handle adding a new task to the tasks array
          // You should update the 'tasks' state with the new task
        }}
      />
    </div>
  );
}

export default App;
