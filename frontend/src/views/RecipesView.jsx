import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/views/RecipesView.css'; // Import the CSS file

const RecipesView = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`recipes-view ${darkMode ? 'recipes-view-dark' : 'recipes-view-light'}`}>
      <h1 className={`recipes-title ${darkMode ? 'recipes-title-dark' : 'recipes-title-light'}`}>
        Recipes Library
      </h1>
      <p className={`recipes-subtitle ${darkMode ? 'recipes-subtitle-dark' : 'recipes-subtitle-light'}`}>
        Browse and manage your saved recipes.
      </p>
      <div className="recipes-grid">
        {/* Recipe cards will be displayed here */}
      </div>
    </div>
  );
};

export default RecipesView;