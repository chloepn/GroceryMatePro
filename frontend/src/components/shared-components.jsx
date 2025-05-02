// src/components/shared-components.jsx
import React, { useState } from 'react';
import { Heart, Eye, UserPlus, MoreHorizontal, ChevronDown, ChevronRight, Check, Plus } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

// Clock component (used by other components)
const Clock = ({ size, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
};

// StatCard component
export const StatCard = ({ title, value, trend, trendType, icon }) => {
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

// ShoppingItem component
export const ShoppingItem = ({ name, quantity, checked }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className="flex items-center justify-between py-1.5">
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-md flex items-center justify-center ${
          checked 
            ? 'bg-emerald-600' 
            : darkMode 
              ? 'border border-gray-600' 
              : 'border border-gray-300'
        }`}>
          {checked && <Check size={12} className="text-white" />}
        </div>
        <span className={`ml-2 ${
          checked 
            ? 'line-through text-gray-400' 
            : darkMode 
              ? 'text-gray-200' 
              : 'text-gray-800'
        }`}>{name}</span>
      </div>
      <span className={`text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-50 text-gray-500'} px-2 py-0.5 rounded-md`}>{quantity}</span>
    </div>
  );
};

// CategorySection component
export const CategorySection = ({ title, color, items }) => {
  const [expanded, setExpanded] = useState(true);
  const { darkMode } = useTheme();
  
  const getColorClass = (color) => {
    switch(color) {
      case 'blue': return darkMode ? 'bg-blue-600' : 'bg-blue-500';
      case 'amber': return darkMode ? 'bg-amber-600' : 'bg-amber-500';
      case 'purple': return darkMode ? 'bg-purple-600' : 'bg-purple-500';
      default: return darkMode ? 'bg-emerald-600' : 'bg-emerald-500';
    }
  };
  
  return (
    <div className="mb-6">
      <div 
        className="flex items-center justify-between cursor-pointer py-2"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} flex items-center`}>
          <div className={`w-2 h-2 ${getColorClass(color)} rounded-full mr-2`}></div>
          {title} ({items.length})
        </h3>
        <button className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>
      
      {expanded && (
        <div className="grid grid-cols-2 gap-3 pl-4 mt-2">
          {items.map((item, idx) => (
            <ShoppingItem 
              key={idx}
              name={item.name}
              quantity={item.quantity}
              checked={item.checked}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ShoppingListCard component
export const ShoppingListCard = ({ title, items, updated, shared, onClick }) => {
  const { darkMode } = useTheme();
  
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

// RecipeCard component
export const RecipeCard = ({ image, title, prep, ingredients, saved, difficulty, rating, onClick }) => {
  const { darkMode } = useTheme();
  
  return (
    <div 
      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer`}
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <button 
          className={`absolute top-3 right-3 p-1.5 rounded-full ${saved ? 'bg-red-500' : 'bg-white/80 backdrop-blur-sm'} shadow-sm`}
          onClick={(e) => {
            e.stopPropagation();
            // Toggle favorite functionality would go here
          }}
        >
          <Heart size={16} fill={saved ? "white" : "none"} stroke={saved ? "white" : "currentColor"} />
        </button>
        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-medium flex items-center">
          <span className="text-amber-500 mr-1">★</span> {rating}
        </div>
        <div className="absolute bottom-3 right-3 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-medium">
          {difficulty}
        </div>
      </div>
      <div className="p-3">
        <h3 className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>{title}</h3>
        <div className={`flex justify-between text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-3`}>
          <span className="flex items-center"><Clock size={12} className="mr-1" /> {prep}</span>
          <span>{ingredients} ingredients</span>
        </div>
        <button 
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-md py-1.5 text-sm font-medium transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // Add to shopping list functionality would go here
          }}
        >
          Add to Shopping List
        </button>
      </div>
    </div>
  );
};

// RecipeFilterButton component
export const RecipeFilterButton = ({ label, active, count }) => {
  const { darkMode } = useTheme();
  
  return (
    <button 
      className={`mr-2 mb-2 px-3 py-1.5 rounded-md text-sm font-medium flex items-center ${
        active 
          ? darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-100 text-emerald-800' 
          : darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
      <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
        active 
          ? darkMode ? 'bg-emerald-800 text-emerald-300' : 'bg-emerald-200 text-emerald-800' 
          : darkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
      }`}>
        {count}
      </span>
    </button>
  );
};

export { Clock };