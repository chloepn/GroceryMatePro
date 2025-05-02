import React from 'react';
import { ShoppingCart, Book, Carrot, Sparkles, ChevronRight, Send, Filter } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { StatCard, RecipeCard } from '../components/SharedComponents';
import MealPlanRow from '../components/MealPlanRow';
import '../styles/views/DashboardView.css'; // Import the CSS file

const DashboardView = ({ setActiveView }) => {
  const { darkMode } = useTheme();

  return (
    <div className="dashboard-scroll-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1 className={`welcome-heading ${darkMode ? 'dark' : 'light'}`}>Welcome back, Morgan!</h1>
        <p className={`welcome-subtext ${darkMode ? 'dark' : 'light'}`}>Here's what's happening with your meal planning and groceries.</p>
      </div>
      
      {/* Stats Overview */}
      <div className="stats-grid">
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
      <div className="dashboard-grid">
        <div className={`shopping-list-container ${darkMode ? 'dark' : 'light'}`}>
          <div className={`list-header ${darkMode ? 'dark' : 'light'}`}>
            <div>
              <h2 className={`header-title ${darkMode ? 'dark' : 'light'}`}>Current Shopping List</h2>
              <p className={`header-subtitle ${darkMode ? 'dark' : 'light'}`}>Weekly Groceries - Updated 2 hours ago</p>
            </div>
            <div className="header-actions">
              <button className={`btn-filter ${darkMode ? 'dark' : 'light'}`}>
                <Filter size={16} className="btn-icon" />
                Filter
              </button>
              <button 
                className={`btn-edit ${darkMode ? 'dark' : 'light'}`}
                onClick={() => setActiveView('viewlist')}
              >
                Edit List
              </button>
              <button className="btn-send">
                <Send size={16} className="btn-icon" />
                Send to Phone
              </button>
            </div>
          </div>
        </div>
        
        {/* Meal Plan Overview */}
        <div className={`meal-plan-container ${darkMode ? 'dark' : 'light'}`}>
          <div className={`plan-header ${darkMode ? 'dark' : 'light'}`}>
            <h2 className={`header-title ${darkMode ? 'dark' : 'light'}`}>Weekly Meal Plan</h2>
            <p className={`header-subtitle ${darkMode ? 'dark' : 'light'}`}>April 29 - May 5</p>
          </div>
          
          <div className="plan-content">
            <div className="meal-plan-rows">
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
              className={`btn-view-calendar ${darkMode ? 'dark' : 'light'}`}
              onClick={() => setActiveView('planner')}
            >
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
      
      {/* Recipe Suggestions */}
      <div className="recipe-suggestions-section">
        <div className="section-header">
          <div>
            <h2 className={`section-title ${darkMode ? 'dark' : 'light'}`}>
              <Sparkles size={18} className="sparkle-icon" />
              Suggested Recipes
            </h2>
            <p className={`section-subtitle ${darkMode ? 'dark' : 'light'}`}>
              Based on your pantry and preferences
            </p>
          </div>
          <button
            className={`btn-browse ${darkMode ? 'dark' : 'light'}`}
            onClick={() => setActiveView('recipes')}
          >
            Browse All Recipes <ChevronRight size={18} className="chevron-icon" />
          </button>
        </div>

        <div className="recipe-grid">
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
    </div>
  );
};

export default DashboardView;