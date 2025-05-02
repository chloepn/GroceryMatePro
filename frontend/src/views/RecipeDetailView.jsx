import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/views/RecipeDetailView.css'; // Import the CSS file

const RecipeDetailView = ({ recipe }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`recipe-detail-view ${darkMode ? 'recipe-detail-view-dark' : 'recipe-detail-view-light'}`}>
      <h1 className={`recipe-title ${darkMode ? 'recipe-title-dark' : 'recipe-title-light'}`}>
        {recipe?.title || 'Recipe Title'}
      </h1>
      <p className={`recipe-description ${darkMode ? 'recipe-description-dark' : 'recipe-description-light'}`}>
        {recipe?.description || 'A brief description of the recipe goes here.'}
      </p>
      <div className="recipe-details">
        {/* Recipe details such as ingredients and steps will go here */}
      </div>
    </div>
  );
};

export default RecipeDetailView;