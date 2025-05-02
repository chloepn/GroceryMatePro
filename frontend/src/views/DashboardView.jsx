// src/views/DashboardView.jsx
import React from 'react';
import { ShoppingCart, Book, Carrot, Sparkles, ChevronRight, Send, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { StatCard, ShoppingItem, RecipeCard } from '../components/shared-components';
import MealPlanRow from '../components/MealPlanRow';

const DashboardView = ({ setActiveView }) => {
  const { darkMode } = useTheme();
  
  return (
    <>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Welcome back, Morgan!</h1>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Here's what's happening with your meal planning and groceries.</p>
      </div>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard 
          title="Active Shopping Lists" 
          value="2" 
          trend="+1 this week" 
          trendType="up"
          icon={<ShoppingCart size={20} />}
        />
        <StatCard 
          title="Saved Recipes" 
          value="48" 
          trend="+5 this week" 
          trendType="up"
          icon={<Book size={20} />}
        />
        <StatCard 
          title="Pantry Items Low Stock" 
          value="7" 
          trend="-3 since last check" 
          trendType="down"
          icon={<Carrot size={20} />}
        />
      </div>
      
      {/* Current Shopping List */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className={`col-span-2 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border`}>
          <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} px-6 py-4 flex items-center justify-between`}>
            <div>
              <h2 className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Current Shopping List</h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Weekly Groceries - Updated 2 hours ago</p>
            </div>
            <div className="flex space-x-3">
              <button className={`${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'} px-3 py-1.5 rounded-md text-sm font-medium flex items-center`}>
                <Filter size={16} className="mr-1.5" />
                Filter
              </button>
              <button 
                className={`${darkMode ? 'bg-emerald-900 text-emerald-400 hover:bg-emerald-800' : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'} px-3 py-1.5 rounded-md text-sm font-medium`}
                onClick={() => setActiveView('viewlist')}
              >
                Edit List
              </button>
              <button className={`bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1.5 rounded-md text-sm font-medium flex items-center`}>
                <Send size={16} className="mr-1.5" />
                Send to Phone
              </button>
            </div>
          </div>
          
          <div className="px-6 py-4">
            <ShoppingItemCategory 
              title="Vegetables & Fruits"
              color="emerald"
              items={[
                { name: "Tomatoes (Organic)", quantity: "500g", checked: false },
                { name: "Red Onions", quantity: "2", checked: true },
                { name: "Bell Peppers", quantity: "3", checked: false },
                { name: "Baby Spinach", quantity: "200g", checked: false }
              ]}
            />
            
            <ShoppingItemCategory 
              title="Dairy & Refrigerated"
              color="blue"
              items={[
                { name: "Almond Milk", quantity: "1L", checked: false },
                { name: "Greek Yogurt", quantity: "500g", checked: false }
              ]}
            />
            
            <button 
              className={`w-full text-center ${darkMode ? 'text-emerald-400 font-medium py-2 mt-2 border border-gray-700 rounded-md hover:bg-gray-700' : 'text-emerald-600 font-medium py-2 mt-2 border border-gray-200 rounded-md hover:bg-gray-50'} transition-colors`}
              onClick={() => setActiveView('viewlist')}
            >
              View All Categories (3 more)
            </button>
          </div>
        </div>
        
        {/* Meal Plan Overview */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-lg shadow-sm border`}>
          <div className={`border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} px-6 py-4`}>
            <h2 className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>Weekly Meal Plan</h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>April 29 - May 5</p>
          </div>
          
          <div className="px-6 py-4">
            <div className="space-y-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day, index) => (
                <MealPlanRow 
                  key={index} 
                  day={day} 
                  date={`Apr ${index + 29}`} 
                  meals={index === 2 ? 
                    [
                      { title: 'Mediterranean Salad', type: 'lunch' },
                      { title: 'Tomato Pasta', type: 'dinner' }
                    ] : 
                    index === 0 ?
                    [
                      { title: 'Avocado Toast', type: 'breakfast' },
                      { title: 'Vegetable Stir Fry', type: 'dinner' }
                    ] :
                    [
                      { title: 'Planned meal', type: 'lunch' }
                    ]
                  } 
                  isToday={index === 2}
                />
              ))}
            </div>
            
            <button 
              className={`w-full text-center ${darkMode ? 'text-emerald-400 font-medium py-2 mt-4 border border-gray-700 rounded-md hover:bg-gray-700' : 'text-emerald-600 font-medium py-2 mt-4 border border-gray-200 rounded-md hover:bg-gray-50'} transition-colors`}
              onClick={() => setActiveView('planner')}
            >
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
      
      {/* Recipe Suggestions */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className={`text-lg font-bold ${darkMode ? 'text-gray-200' : 'text-gray-800'} flex items-center`}>
              <Sparkles size={18} className="text-amber-500 mr-2" />
              Suggested Recipes
            </h2>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Based on your pantry and preferences</p>
          </div>
          <button 
            className={`${darkMode ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-600 hover:text-emerald-700'} flex items-center font-medium transition-colors`}
            onClick={() => setActiveView('recipes')}
          >
            Browse All Recipes <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-4 gap-5">
          <RecipeCard 
            image="/api/placeholder/300/200"
            title="Mediterranean Salad"
            prep="15 mins"
            ingredients={4}
            saved={true}
            difficulty="Easy"
            rating={4.8}
            onClick={() => setActiveView('viewrecipe')}
          />
          <RecipeCard 
            image="/api/placeholder/300/200"
            title="Tomato Pasta"
            prep="25 mins"
            ingredients={6}
            saved={false}
            difficulty="Medium"
            rating={4.5}
            onClick={() => setActiveView('viewrecipe')}
          />
          <RecipeCard 
            image="/api/placeholder/300/200"
            title="Avocado Toast"
            prep="10 mins"
            ingredients={3}
            saved={false}
            difficulty="Easy"
            rating={4.2}
            onClick={() => setActiveView('viewrecipe')}
          />
          <RecipeCard 
            image="/api/placeholder/300/200"
            title="Vegetable Stir Fry"
            prep="30 mins"
            ingredients={8}
            saved={true}
            difficulty="Medium"
            rating={4.7}
            onClick={() => setActiveView('viewrecipe')}
          />
        </div>
      </div>
    </>
  );
};

const ShoppingItemCategory = ({ title, color, items }) => {
  const { darkMode } = useTheme();
  
  const getColorClass = (color) => {
    switch(color) {
      case 'blue': return darkMode ? 'bg-blue-500' : 'bg-blue-500';
      case 'amber': return darkMode ? 'bg-amber-500' : 'bg-amber-500';
      case 'purple': return darkMode ? 'bg-purple-500' : 'bg-purple-500';
      default: return darkMode ? 'bg-emerald-500' : 'bg-emerald-500';
    }
  };
  
  return (
    <div className="mb-4">
      <h3 className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center mb-3`}>
        <div className={`w-2 h-2 ${getColorClass(color)} rounded-full mr-2`}></div>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3 pl-4">
        {items.map((item, idx) => (
          <ShoppingItem 
            key={idx}
            name={item.name}
            quantity={item.quantity}
            checked={item.checked}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardView;