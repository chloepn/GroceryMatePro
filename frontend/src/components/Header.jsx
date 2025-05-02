// src/components/Header.jsx
import React from 'react';
import { Bell, Settings, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ activeView }) => {
  const { darkMode, toggleDarkMode } = useTheme();
  
  const getViewTitle = (view) => {
    switch(view) {
      case 'shopping':
        return 'Shopping Lists';
      case 'recipes':
        return 'Recipes Library';
      case 'pantry':
        return 'Pantry Inventory';
      case 'planner':
        return 'Meal Planner';
      case 'viewlist':
        return 'Shopping List Details';
      case 'viewrecipe':
        return 'Recipe Details';
      case 'favorites':
        return 'Favorite Recipes';
      case 'shared':
        return 'Shared Lists';
      default:
        return 'Dashboard';
    }
  };
  
  return (
    <header className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b py-4 px-6 flex items-center justify-between`}>
      <div className="flex items-center">
        <h2 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{getViewTitle(activeView)}</h2>
        <span className={`ml-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Wednesday, April 30, 2025</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text"
              placeholder="Search..."
              className={`pl-10 pr-4 py-2 ${darkMode ? 'bg-gray-700 border-gray-600 text-gray-200 placeholder-gray-400' : 'border-gray-300 text-gray-800'} border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64`}
            />
          </div>
        </div>
        
        <button className={`relative p-2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
          <Bell size={20} />
          <span className="absolute top-0 right-0 h-4 w-4 bg-emerald-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
        </button>
        
        <button className={`p-2 ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
          <Settings size={20} />
        </button>
        
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;