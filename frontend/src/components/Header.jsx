import React from 'react';
import { Bell, Settings, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/components/Header.css'; // Import the CSS file

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
    <header className={`header ${darkMode ? 'header-dark' : 'header-light'}`}>
      <div className="flex items-center">
        <h2 className={`header-title ${darkMode ? 'header-title-dark' : 'header-title-light'}`}>
          {getViewTitle(activeView)}
        </h2>
        <span className={`header-date ${darkMode ? 'header-date-dark' : 'header-date-light'}`}>
          Wednesday, April 30, 2025
        </span>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="search-container">
          <Search className="search-icon" size={18} />
          <input 
            type="text"
            placeholder="Search..."
            className={`search-input ${darkMode ? 'search-input-dark' : 'search-input-light'}`}
          />
        </div>
        
        <button className="notification-button">
          <Bell size={20} className={darkMode ? 'settings-button-dark' : 'settings-button-light'} />
          <span className="notification-badge">3</span>
        </button>
        
        <button className={`settings-button ${darkMode ? 'settings-button-dark' : 'settings-button-light'}`}>
          <Settings size={20} />
        </button>
        
        <button 
          onClick={toggleDarkMode} 
          className={`dark-mode-toggle ${darkMode ? 'dark-mode-toggle-dark' : 'dark-mode-toggle-light'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;