import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Plus, Trash2, Check } from 'lucide-react';
import '../styles/views/SingleListView.css'; // Import the CSS file

const SingleListView = ({ list }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`single-list-view ${darkMode ? 'single-list-view-dark' : 'single-list-view-light'}`}>
      <div className="single-list-header">
        <h1 className={`single-list-title ${darkMode ? 'single-list-title-dark' : 'single-list-title-light'}`}>
          {list?.title || 'Shopping List'}
        </h1>
        <button className="add-item-button">
          <Plus size={18} className="mr-2" />
          Add Item
        </button>
      </div>
      <div className="single-list-items">
        {list?.items?.map((item, index) => (
          <div key={index} className={`single-list-item ${darkMode ? 'single-list-item-dark' : 'single-list-item-light'}`}>
            <span>{item.name}</span>
            <div className="item-actions">
              <Check size={18} className="check-icon" />
              <Trash2 size={18} className="delete-icon" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleListView;