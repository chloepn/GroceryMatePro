import React from 'react';
import { Plus, UserPlus, MoreHorizontal, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/views/ShoppingListView.css'; // Import the CSS file

const ShoppingListView = ({ setActiveView }) => {
  const { darkMode } = useTheme();
  
  const ShoppingListCard = ({ title, items, updated, shared, onClick }) => {
    return (
      <div 
        className={`shopping-list-card ${darkMode ? 'shopping-list-card-dark' : 'shopping-list-card-light'}`}
        onClick={onClick}
      >
        <div className="flex justify-between">
          <h3 className={`shopping-list-card-title ${darkMode ? 'shopping-list-card-title-dark' : 'shopping-list-card-title-light'}`}>{title}</h3>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={18} />
          </button>
        </div>
        <p className={`${darkMode ? 'shopping-list-card-subtitle-dark' : 'shopping-list-card-subtitle-light'}`}>{items} items · Updated {updated}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {shared && (
              <span className={`shared-badge ${darkMode ? 'shared-badge-dark' : 'shared-badge-light'}`}>
                <UserPlus size={12} className="mr-1" />
                Shared
              </span>
            )}
          </div>
          <button className={`view-list-button ${darkMode ? 'view-list-button-dark' : 'view-list-button-light'}`}>
            View List <Eye size={16} className="ml-1" />
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <div className="shopping-list-header">
        <div>
          <h1 className={`shopping-list-title ${darkMode ? 'shopping-list-title-dark' : 'shopping-list-title-light'}`}>Your Shopping Lists</h1>
          <p className={`${darkMode ? 'shopping-list-subtitle-dark' : 'shopping-list-subtitle-light'}`}>Manage all your shopping lists in one place</p>
        </div>
        <button className="create-list-button">
          <Plus size={18} className="mr-2" />
          Create New List
        </button>
      </div>
      
      <div className="shopping-list-grid">
        {[
          { id: 1, title: 'Weekly Groceries', items: 14, updated: '2 hours ago', shared: true },
          { id: 2, title: 'Dinner Party', items: 8, updated: 'Yesterday', shared: false },
          { id: 3, title: 'Pantry Restock', items: 12, updated: '3 days ago', shared: false },
          { id: 4, title: 'Camping Trip', items: 22, updated: '1 week ago', shared: true },
          { id: 5, title: 'Office Snacks', items: 5, updated: '2 weeks ago', shared: false },
        ].map((list) => (
          <ShoppingListCard 
            key={list.id}
            title={list.title}
            items={list.items}
            updated={list.updated}
            shared={list.shared}
            onClick={() => setActiveView('viewlist')}
          />
        ))}
        
        <div className={`create-new-list-placeholder ${darkMode ? 'create-new-list-placeholder-dark' : 'create-new-list-placeholder-light'}`}>
          <Plus size={24} className="mb-2" />
          <p className="font-medium">Create New List</p>
        </div>
      </div>
    </>
  );
};

export default ShoppingListView;