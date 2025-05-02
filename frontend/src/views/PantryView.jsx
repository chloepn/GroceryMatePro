import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/views/PantryView.css'; // Import the CSS file

const PantryView = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`pantry-view ${darkMode ? 'pantry-view-dark' : 'pantry-view-light'}`}>
      <h1 className={`pantry-title ${darkMode ? 'pantry-title-dark' : 'pantry-title-light'}`}>
        Pantry Inventory
      </h1>
      <p className={`pantry-subtitle ${darkMode ? 'pantry-subtitle-dark' : 'pantry-subtitle-light'}`}>
        Keep track of your pantry items and their stock levels.
      </p>
      <div className="pantry-items">
        {/* Pantry items will be displayed here */}
      </div>
    </div>
  );
};

export default PantryView;