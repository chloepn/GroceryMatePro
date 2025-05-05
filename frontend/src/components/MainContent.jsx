import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import DashboardView from '../views/DashboardView';
import ShoppingListView from '../views/ShoppingListView';
import RecipesView from '../views/RecipesView';
import PantryView from '../views/PantryView';
import MealPlannerView from '../views/MealPlannerView';
import SingleListView from '../views/SingleListView';
import IngredientsView from '../views/IngredientsView';
import '../styles/components/MainContent.css'; // Import the CSS file

const MainContent = ({ activeView, setActiveView }) => {
  const { darkMode } = useTheme();
  
  // Function to render different views based on active selection
  const renderContent = () => {
    switch(activeView) {
      case 'shopping':
        return <ShoppingListView setActiveView={setActiveView} />;
      case 'ingredients':
        return <IngredientsView setActiveView={setActiveView} />;
      case 'recipes':
        return <RecipesView setActiveView={setActiveView} />;
      case 'pantry':
        return <PantryView />;
      case 'planner':
        return <MealPlannerView />;
      case 'viewlist':
        return <SingleListView goBack={() => setActiveView('shopping')} />;
      case 'viewrecipe':
        return <RecipesView goBack={() => setActiveView('recipes')} />;
      default:
        return <DashboardView setActiveView={setActiveView} />;
    }
  };
  
  return (
    <main className={`main-content ${darkMode ? 'main-content-dark' : ''}`}>
      {renderContent()}
    </main>
  );
};

export default MainContent;