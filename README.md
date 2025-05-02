# GroceryMatePro

GroceryMate App
A modern React application for managing grocery shopping lists, recipes, pantry inventory, and meal planning with dark mode support.
Features
Dark/Light Theme Toggle: Easily switch between light and dark modes
Shopping Lists Management: Create, view, and manage multiple shopping lists
Recipe Library: Browse and save your favorite recipes
Pantry Inventory: Track what's in your pantry
Meal Planner: Plan your meals for the week
Responsive Design: Works on both desktop and mobile devices
Project Structure
The application is organized into a modular component structure for better maintainability:
App: The main component that manages routing and state
Context:
ThemeContext: Manages the application's theme state
Components:
Header: Top navigation bar with search and theme toggle
Sidebar: Navigation sidebar with links to different sections
MainContent: Container for the current view
Various shared UI components
Views:
DashboardView: Main dashboard with overview of all features
ShoppingListView: List of all shopping lists
SingleListView: Detailed view of a single shopping list
RecipesView: Recipe library and search
RecipeDetailView: Detailed view of a recipe
PantryView: Pantry inventory management
MealPlannerView: Weekly meal planning
Getting Started
Clone the repository
Install dependencies:
npm install
Start the development server:
npm start
Open http://localhost:3000 in your browser
Technologies Used
React
Tailwind CSS
Lucide React (for icons)
Context API (for state management)
License
This project is licensed under the MIT License - see the LICENSE file for details.
