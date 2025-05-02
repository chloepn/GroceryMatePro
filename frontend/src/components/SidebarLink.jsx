// src/components/SidebarLink.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const SidebarLink = ({ icon, label, active, onClick, badge }) => {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium w-full ${
        active 
          ? darkMode 
            ? 'bg-emerald-900 text-emerald-400' 
            : 'bg-emerald-100 text-emerald-600' 
          : darkMode 
            ? 'text-gray-300 hover:bg-gray-700' 
            : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
      {badge && (
        <span className={`ml-auto ${darkMode ? 'bg-emerald-700' : 'bg-emerald-600'} text-white text-xs rounded-full h-5 w-5 flex items-center justify-center`}>
          {badge}
        </span>
      )}
    </button>
  );
};

export default SidebarLink;