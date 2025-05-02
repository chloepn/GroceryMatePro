import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/views/MealPlannerView.css'; // Import the CSS file

const MealPlannerView = () => {
  const { darkMode } = useTheme();
  
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const currentMonth = 'May';
  
  return (
    <>
      <div className="meal-planner-header">
        <div>
          <h1 className={`meal-planner-title ${darkMode ? 'meal-planner-title-dark' : 'meal-planner-title-light'}`}>Meal Planner</h1>
          <p className={`${darkMode ? 'meal-planner-subtitle-dark' : 'meal-planner-subtitle-light'}`}>Plan your meals for the week ahead</p>
        </div>
        <div className="flex space-x-3">
          <div className={`meal-planner-date-nav ${darkMode ? 'meal-planner-date-nav-dark' : 'meal-planner-date-nav-light'}`}>
            <ChevronLeft size={18} className="cursor-pointer mr-2" />
            <span className="text-sm font-medium">May 1 - May 7, 2025</span>
            <ChevronRight size={18} className="cursor-pointer ml-2" />
          </div>
          <button className="add-meal-button">
            <Plus size={18} className="mr-2" />
            Add Meal
          </button>
        </div>
      </div>
      
      <div className={`meal-plan-table ${darkMode ? 'meal-plan-table-dark' : 'meal-plan-table-light'}`}>
        {/* Meal Plan Table Content */}
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className={`footer-button ${darkMode ? 'footer-button-dark' : 'footer-button-light'}`}>
          <Calendar size={18} className="mr-1.5" />
          View Calendar
        </button>
        
        <button className="add-meal-button">
          Generate Shopping List
        </button>
      </div>
    </>
  );
};

export default MealPlannerView;