import React from 'react';
import { Plus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/components/MealPlanRow.css'; // Import the CSS file

const MealPlanRow = ({ day, date, meals, isToday }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`meal-plan-row ${
      isToday 
        ? darkMode 
          ? 'meal-plan-row-today-dark' 
          : 'meal-plan-row-today-light' 
        : ''
    }`}>
      <div className="meal-plan-day">
        <p className={`${
          isToday 
            ? darkMode ? 'meal-plan-day-dark' : 'meal-plan-day-light' 
            : darkMode ? 'meal-plan-day-default-dark' : 'meal-plan-day-default-light'
        }`}>{day}</p>
        <p className={`meal-plan-date ${darkMode ? 'meal-plan-date-dark' : 'meal-plan-date-light'}`}>{date}</p>
      </div>
      <div className="flex-1">
        {meals.length > 0 ? (
          <div className="meal-plan-meals">
            {meals.map((meal, idx) => (
              <span 
                key={idx} 
                className={`meal-plan-meal ${
                  meal.type === 'breakfast' 
                    ? darkMode ? 'meal-plan-meal-breakfast-dark' : 'meal-plan-meal-breakfast-light' 
                    : meal.type === 'lunch' 
                      ? darkMode ? 'meal-plan-meal-lunch-dark' : 'meal-plan-meal-lunch-light' 
                      : darkMode ? 'meal-plan-meal-dinner-dark' : 'meal-plan-meal-dinner-light'
                }`}
              >
                {meal.title}
              </span>
            ))}
          </div>
        ) : (
          <span className={`meal-plan-no-meals ${darkMode ? 'meal-plan-no-meals-dark' : 'meal-plan-no-meals-light'}`}>No meals planned</span>
        )}
      </div>
      <button className={`meal-plan-add-button ${darkMode ? 'meal-plan-add-button-dark' : 'meal-plan-add-button-light'}`}>
        <Plus size={16} />
      </button>
    </div>
  );
};

export default MealPlanRow;