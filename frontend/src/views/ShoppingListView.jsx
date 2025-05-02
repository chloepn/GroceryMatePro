// src/views/ShoppingListView.jsx
import React from 'react';
import { Plus, UserPlus, MoreHorizontal, Eye } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ShoppingListView = ({ setActiveView }) => {
  const { darkMode } = useTheme();
  
  // ShoppingListCard component defined inline for completeness
  const ShoppingListCard = ({ title, items, updated, shared, onClick }) => {
    return (
      <div 
        className={`${darkMode ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-white border-gray-200 hover:shadow-md'} rounded-lg border p-5 transition-all cursor-pointer`}
        onClick={onClick}
      >
        <div className="flex justify-between">
          <h3 className={`font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} text-lg mb-2`}>{title}</h3>
          <button className={`${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'}`}>
            <MoreHorizontal size={18} />
          </button>
        </div>
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>{items} items · Updated {updated}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {shared && (
              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                <UserPlus size={12} className="mr-1" />
                Shared
              </span>
            )}
          </div>
          <button className={`${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'} text-sm font-medium flex items-center`}>
            View List <Eye size={16} className="ml-1" />
          </button>
        </div>
      </div>
    );
  };
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Your Shopping Lists</h1>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Manage all your shopping lists in one place</p>
        </div>
        <button className="bg-emerald-600 text-white hover:bg-emerald-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
          <Plus size={18} className="mr-2" />
          Create New List
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-6">
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
        
        <div className={`${darkMode ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' : 'bg-gray-50 border-gray-300 hover:bg-gray-100'} rounded-lg border border-dashed p-6 flex flex-col items-center justify-center ${darkMode ? 'text-gray-400' : 'text-gray-500'} cursor-pointer`}>
          <Plus size={24} className="mb-2" />
          <p className="font-medium">Create New List</p>
        </div>
      </div>
    </>
  );
};

export default ShoppingListView;