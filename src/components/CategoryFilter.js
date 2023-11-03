import React, { useState } from 'react';

function CategoryFilter({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    // Implement category filter functionality
    setSelectedCategory(category);
  };

  return (
    <div>
      {categories.map((category) => (
        <button
        key={category}
        className={category === selectedCategory ? 'selected' : ''}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
