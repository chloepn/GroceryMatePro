import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/components/StatCard.css'; // Import the CSS file

const StatCard = ({ title, value, trend, trendType, icon }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`stat-card ${darkMode ? 'stat-card-dark' : 'stat-card-light'}`}>
      <div className="flex items-center mb-4">
        <div className={`stat-card-icon ${darkMode ? 'stat-card-icon-dark' : 'stat-card-icon-light'}`}>
          {React.cloneElement(icon, { 
            className: `${
              icon.props.size === 20 
                ? (darkMode ? 'stat-card-icon-emerald-dark' : 'stat-card-icon-emerald-light') 
                : ''
            } ${icon.props.className || ''}` 
          })}
        </div>
        <div className="ml-auto">
          <span className={`stat-card-trend ${
            trendType === 'up' 
              ? darkMode ? 'stat-card-trend-up-dark' : 'stat-card-trend-up-light' 
              : darkMode ? 'stat-card-trend-down-dark' : 'stat-card-trend-down-light'
          }`}>
            {trend}
          </span>
        </div>
      </div>
      <h3 className={`stat-card-value ${darkMode ? 'stat-card-value-dark' : 'stat-card-value-light'}`}>{value}</h3>
      <p className={`stat-card-title ${darkMode ? 'stat-card-title-dark' : 'stat-card-title-light'}`}>{title}</p>
    </div>
  );
};

export default StatCard;