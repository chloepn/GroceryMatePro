import React from 'react';
import { Home, ShoppingCart, Book, Carrot, Calendar, Heart, UserPlus, ShoppingBag, LogOut } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SidebarLink from './SidebarLink';
import '../styles/components/Sidebar.css'; // Import the CSS file

const Sidebar = ({ activeView, setActiveView }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`sidebar ${darkMode ? 'sidebar-dark' : 'sidebar-light'}`}>
      {/* Logo */}
      <div className={`sidebar-logo ${darkMode ? 'sidebar-logo-dark' : 'sidebar-logo-light'}`}>
        <div className="flex items-center space-x-3">
          <div className={`sidebar-logo-icon ${darkMode ? 'sidebar-logo-icon-dark' : 'sidebar-logo-icon-light'}`}>
            <ShoppingCart size={22} className="text-emerald-500" />
          </div>
          <h1 className={`sidebar-logo-title ${darkMode ? 'sidebar-logo-title-dark' : 'sidebar-logo-title-light'}`}>GroceryMate</h1>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <div className="space-y-1">
          <SidebarLink 
            icon={<Home size={20} />} 
            label="Dashboard" 
            active={activeView === 'dashboard'} 
            onClick={() => setActiveView('dashboard')} 
          />
          <SidebarLink 
            icon={<Carrot size={20} />} 
            label="Ingredients" 
            active={activeView === 'ingredients' || activeView === 'viewingredient'} 
            onClick={() => setActiveView('ingredients')} 
            badge="2"
          />
          <SidebarLink 
            icon={<Book size={20} />} 
            label="Recipes" 
            active={activeView === 'recipes' || activeView === 'viewrecipe'} 
            onClick={() => setActiveView('recipes')} 
          />
          <SidebarLink 
            icon={<ShoppingCart size={20} />} 
            label="Shopping Lists" 
            active={activeView === 'shopping' || activeView === 'viewlist'} 
            onClick={() => setActiveView('shopping')} 
            badge="2"
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
        <div className="sidebar-nav-section">
          <h3 className={`sidebar-nav-section-title ${darkMode ? 'sidebar-nav-section-title-dark' : 'sidebar-nav-section-title-light'}`}>
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
      <div className={`sidebar-user ${darkMode ? 'sidebar-user-dark' : 'sidebar-user-light'}`}>
        <div className="flex items-center">
          <div className="sidebar-user-avatar">
            ME
          </div>
          <div className="ml-3">
            <p className={`sidebar-user-name ${darkMode ? 'sidebar-user-name-dark' : 'sidebar-user-name-light'}`}>Morgan Edwards</p>
            <p className={`sidebar-user-plan ${darkMode ? 'sidebar-user-plan-dark' : 'sidebar-user-plan-light'}`}>Premium Plan</p>
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