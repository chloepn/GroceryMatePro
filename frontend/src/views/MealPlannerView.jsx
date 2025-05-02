// src/views/MealPlannerView.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Calendar, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const MealPlannerView = () => {
  const { darkMode } = useTheme();
  
  // Sample meal plan data
  const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const currentMonth = 'May';
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Meal Planner</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Plan your meals for the week ahead</p>
        </div>
        <div className="flex space-x-3">
          <div className={`flex items-center ${darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-800'} px-3 py-2 rounded-md`}>
            <ChevronLeft size={18} className="cursor-pointer mr-2" />
            <span className="text-sm font-medium">May 1 - May 7, 2025</span>
            <ChevronRight size={18} className="cursor-pointer ml-2" />
          </div>
          <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
            <Plus size={18} className="mr-2" />
            Add Meal
          </button>
        </div>
      </div>
      
      <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
        <div className="grid grid-cols-8 gap-4 mb-4">
          <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} font-medium text-center`}>
            
          </div>
          {['Breakfast', 'Lunch', 'Dinner'].map((mealType, index) => (
            <div 
              key={index} 
              className={`col-span-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium text-center pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
            >
              {mealType}
            </div>
          ))}
          <div className={`col-span-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'} font-medium text-center pb-2 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            Snacks
          </div>
        </div>
        
        {weekDays.map((day, dayIndex) => (
          <div key={dayIndex} className={`grid grid-cols-8 gap-4 py-3 ${dayIndex < weekDays.length - 1 ? `border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}` : ''}`}>
            <div className="flex flex-col justify-center">
              <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>{day}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{`${currentMonth} ${dayIndex + 1}`}</p>
            </div>
            
            {/* Breakfast */}
            <div className={`col-span-2 ${dayIndex === 2 ? (darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100') : (darkMode ? 'bg-gray-750' : 'bg-gray-50')} border p-2 rounded-md min-h-20 flex flex-col`}>
              {dayIndex === 0 || dayIndex === 2 || dayIndex === 5 ? (
                <>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {dayIndex === 0 ? 'Avocado Toast' : dayIndex === 2 ? 'Greek Yogurt Bowl' : 'Oatmeal with Berries'}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    {dayIndex === 0 ? '15 min • 320 cal' : dayIndex === 2 ? '10 min • 250 cal' : '12 min • 280 cal'}
                  </p>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <button className={`flex items-center text-xs ${darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'}`}>
                    <Plus size={14} className="mr-1" />
                    Add breakfast
                  </button>
                </div>
              )}
            </div>
            
            {/* Lunch */}
            <div className={`col-span-2 ${dayIndex === 2 ? (darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100') : (darkMode ? 'bg-gray-750' : 'bg-gray-50')} border p-2 rounded-md min-h-20 flex flex-col`}>
              {dayIndex === 1 || dayIndex === 2 || dayIndex === 4 ? (
                <>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {dayIndex === 1 ? 'Chicken Salad' : dayIndex === 2 ? 'Mediterranean Salad' : 'Vegetable Soup'}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    {dayIndex === 1 ? '20 min • 420 cal' : dayIndex === 2 ? '15 min • 380 cal' : '25 min • 350 cal'}
                  </p>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <button className={`flex items-center text-xs ${darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'}`}>
                    <Plus size={14} className="mr-1" />
                    Add lunch
                  </button>
                </div>
              )}
            </div>
            
            {/* Dinner */}
            <div className={`col-span-2 ${dayIndex === 2 ? (darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100') : (darkMode ? 'bg-gray-750' : 'bg-gray-50')} border p-2 rounded-md min-h-20 flex flex-col`}>
              {dayIndex === 0 || dayIndex === 2 || dayIndex === 3 || dayIndex === 6 ? (
                <>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {dayIndex === 0 ? 'Vegetable Stir Fry' : dayIndex === 2 ? 'Tomato Pasta' : dayIndex === 3 ? 'Grilled Salmon' : 'Pizza Night'}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    {dayIndex === 0 ? '30 min • 450 cal' : dayIndex === 2 ? '25 min • 520 cal' : dayIndex === 3 ? '35 min • 480 cal' : '40 min • 650 cal'}
                  </p>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <button className={`flex items-center text-xs ${darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'}`}>
                    <Plus size={14} className="mr-1" />
                    Add dinner
                  </button>
                </div>
              )}
            </div>
            
            {/* Snacks */}
            <div className={`${dayIndex === 2 ? (darkMode ? 'bg-emerald-900/30 border-emerald-800' : 'bg-emerald-50 border-emerald-100') : (darkMode ? 'bg-gray-750' : 'bg-gray-50')} border p-2 rounded-md min-h-20 flex flex-col`}>
              {dayIndex === 2 || dayIndex === 5 ? (
                <>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                    {dayIndex === 2 ? 'Apple & Nuts' : 'Protein Bar'}
                  </p>
                  <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    {dayIndex === 2 ? '180 cal' : '200 cal'}
                  </p>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <button className={`flex items-center text-xs ${darkMode ? 'text-gray-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'}`}>
                    <Plus size={14} className="mr-1" />
                    Add
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-between">
        <button className={`flex items-center ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-600 hover:text-gray-800'}`}>
          <Calendar size={18} className="mr-1.5" />
          View Calendar
        </button>
        
        <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium">
          Generate Shopping List
        </button>
      </div>
    </>
  );
};

export default MealPlannerView;