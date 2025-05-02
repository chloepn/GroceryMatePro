import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/components/SidebarLink.css'; // Import the CSS file

const SidebarLink = ({ icon, label, active, onClick, badge }) => {
  const { darkMode } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`sidebar-link ${
        active 
          ? darkMode 
            ? 'sidebar-link-active-dark' 
            : 'sidebar-link-active-light' 
          : darkMode 
            ? 'sidebar-link-inactive-dark' 
            : 'sidebar-link-inactive-light'
      }`}
    >
      <span className="sidebar-link-icon">{icon}</span>
      <span>{label}</span>
      {badge && (
        <span className={`sidebar-link-badge ${darkMode ? 'sidebar-link-badge-dark' : 'sidebar-link-badge-light'}`}>
          {badge}
        </span>
      )}
    </button>
  );
};

export default SidebarLink;