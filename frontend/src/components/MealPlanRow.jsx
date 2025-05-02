// src/components/MealPlanRow.jsx
import React from 'react';
import { Plus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const MealPlanRow = ({ day, date, meals, isToday }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`flex items-center p-3 rounded-md ${
      isToday 
        ? darkMode 
          ? 'bg-emerald-900 border border-emerald-800' 
          : 'bg-emerald-50 border border-emerald-100' 
        : ''
    }`}>
      <div className="w-24">
        <p className={`font-medium ${
          isToday 
            ? darkMode ? 'text-emerald-300' : 'text-emerald-700' 
            : darkMode ? 'text-gray-200' : 'text-gray-700'
        }`}>{day}</p>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{date}</p>
      </div>
      <div className="flex-1">
        {meals.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {meals.map((meal, idx) => (
              <span 
                key={idx} 
                className={`text-xs px-2 py-1 rounded-md ${
                  meal.type === 'breakfast' 
                    ? darkMode ? 'bg-amber-900 text-amber-300' : 'bg-amber-100 text-amber-800' 
                    : meal.type === 'lunch' 
                      ? darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800' 
                      : darkMode ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-800'
                }`}
              >
                {meal.title}
              </span>
            ))}
          </div>
        ) : (
          <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>No meals planned</span>
        )}
      </div>
      <button className={`ml-auto ${darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-400 hover:text-emerald-600'}`}>
        <Plus size={16} />
      </button>
    </div>
  );
};

export default MealPlanRow;