// src/components/StatCard.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StatCard = ({ title, value, trend, trendType, icon }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border p-6`}>
      <div className="flex items-center mb-4">
        <div className={`p-2 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
          {React.cloneElement(icon, { 
            className: `${
              icon.props.size === 20 
                ? (darkMode ? 'text-emerald-400' : 'text-emerald-600') 
                : ''
            } ${icon.props.className || ''}` 
          })}
        </div>
        <div className="ml-auto">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            trendType === 'up' 
              ? darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800' 
              : darkMode ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'
          }`}>
            {trend}
          </span>
        </div>
      </div>
      <h3 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{value}</h3>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{title}</p>
    </div>
  );
};

export default StatCard;