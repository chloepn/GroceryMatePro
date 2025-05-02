// src/components/Sidebar.jsx
import React from 'react';
import { Home, ShoppingCart, Book, Carrot, Calendar, Heart, UserPlus, ShoppingBag, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SidebarLink from './SidebarLink';

const Sidebar = ({ activeView, setActiveView }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`w-64 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col`}>
      {/* Logo */}
      <div className={`p-5 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center space-x-3">
          <div className={`${darkMode ? 'bg-emerald-900' : 'bg-emerald-100'} p-2 rounded-lg`}>
            <ShoppingCart size={22} className="text-emerald-500" />
          </div>
          <h1 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>GroceryMate</h1>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="flex-1 py-5 px-3 overflow-y-auto">
        <div className="space-y-1">
          <SidebarLink 
            icon={<Home size={20} />} 
            label="Dashboard" 
            active={activeView === 'dashboard'} 
            onClick={() => setActiveView('dashboard')} 
          />
          <SidebarLink 
            icon={<ShoppingCart size={20} />} 
            label="Shopping Lists" 
            active={activeView === 'shopping' || activeView === 'viewlist'} 
            onClick={() => setActiveView('shopping')} 
            badge="2"
          />
          <SidebarLink 
            icon={<Book size={20} />} 
            label="Recipes" 
            active={activeView === 'recipes' || activeView === 'viewrecipe'} 
            onClick={() => setActiveView('recipes')} 
          />
          <SidebarLink 
            icon={<Carrot size={20} />} 
            label="Pantry" 
            active={activeView === 'pantry'} 
            onClick={() => setActiveView('pantry')} 
          />
          <SidebarLink 
            icon={<Calendar size={20} />} 
            label="Meal Planner" 
            active={activeView === 'planner'} 
            onClick={() => setActiveView('planner')} 
          />
        </div>
        
        {/* Quick Access Section */}
        <div className="mt-8">
          <h3 className={`px-3 text-xs font-semibold ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider`}>
            Quick Access
          </h3>
          <div className="mt-2 space-y-1">
            <SidebarLink 
              icon={<Heart size={20} />} 
              label="Favorite Recipes" 
              active={activeView === 'favorites'} 
              onClick={() => setActiveView('favorites')} 
            />
            <SidebarLink 
              icon={<UserPlus size={20} />} 
              label="Shared Lists" 
              active={activeView === 'shared'} 
              onClick={() => setActiveView('shared')} 
            />
            <SidebarLink 
              icon={<ShoppingBag size={20} />} 
              label="Grocery Stores" 
              active={activeView === 'stores'} 
              onClick={() => setActiveView('stores')} 
            />
          </div>
        </div>
      </nav>
      
      {/* User Profile */}
      <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-medium shadow-sm">
            ME
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Morgan Edwards</p>
            <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Premium Plan</p>
          </div>
          <button className={`ml-auto ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}>
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;