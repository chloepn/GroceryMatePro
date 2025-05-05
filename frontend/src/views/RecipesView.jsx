import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Search, Filter, Plus, Heart, Clock, Users, BookOpen, Edit, Trash2, X, ArrowUpDown, Star, ChefHat, Bookmark, Share2 } from 'lucide-react';
import '../styles/views/RecipesView.css';

const RecipesView = ({ setActiveView }) => {
  const { darkMode } = useTheme();
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'ascending'
  });
  const [filters, setFilters] = useState({
    category: 'all',
    timeMin: '',
    timeMax: '',
    difficulty: 'all',
    favorite: false
  });
  
  // Mock categories - replace with your actual categories from DB
  const recipeCategories = [
    "Breakfast", "Lunch", "Dinner", "Appetizer", "Salad", 
    "Soup", "Dessert", "Snack", "Beverage", "Vegetarian", "Vegan"
  ];
  
  // Mock difficulty levels
  const difficultyLevels = ["Easy", "Medium", "Hard"];
  
  // Fetch recipes on component mount
  useEffect(() => {
    fetchRecipes();
  }, []);
  
  // Apply filters when filter state changes or when recipes change
  useEffect(() => {
    applyFilters();
  }, [filters, recipes, searchTerm, sortConfig]);
  
  const fetchRecipes = async () => {
    setLoading(true);
    try {
      // Simulating API response
      const response = [
        {
          id: 1,
          name: "Classic Spaghetti Bolognese",
          description: "A rich and hearty Italian pasta dish with a meaty tomato sauce.",
          prep_time: 20,
          cook_time: 45,
          servings: 4,
          difficulty: "Medium",
          category: "Dinner",
          image_url: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500&auto=format&fit=crop",
          ingredients: [
            { id: 1, name: "Ground beef", amount: 500, unit: "g" },
            { id: 2, name: "Onion", amount: 1, unit: "medium" },
            { id: 3, name: "Garlic", amount: 3, unit: "cloves" },
            { id: 4, name: "Tomatoes", amount: 400, unit: "g" },
            { id: 5, name: "Spaghetti", amount: 350, unit: "g" }
          ],
          instructions: [
            "Brown the ground beef in a large pot over medium heat.",
            "Add chopped onions and garlic, cook until softened.",
            "Add crushed tomatoes and tomato paste, stir well.",
            "Season with herbs and spices, then simmer for 30 minutes.",
            "Cook spaghetti according to package instructions.",
            "Serve sauce over pasta with grated Parmesan cheese."
          ],
          is_favorite: true,
          is_deleted: false
        },
        {
          id: 2,
          name: "Vegetable Stir Fry",
          description: "Quick and healthy vegetable stir fry with soy sauce and ginger.",
          prep_time: 15,
          cook_time: 10,
          servings: 2,
          difficulty: "Easy",
          category: "Vegetarian",
          image_url: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500&auto=format&fit=crop",
          ingredients: [
            { id: 6, name: "Bell pepper", amount: 1, unit: "medium" },
            { id: 7, name: "Broccoli", amount: 200, unit: "g" },
            { id: 8, name: "Carrots", amount: 2, unit: "medium" },
            { id: 9, name: "Soy sauce", amount: 30, unit: "ml" },
            { id: 10, name: "Ginger", amount: 1, unit: "tablespoon" }
          ],
          instructions: [
            "Slice all vegetables into bite-sized pieces.",
            "Heat oil in a wok or large frying pan over high heat.",
            "Add vegetables and stir fry for 5-7 minutes until crisp-tender.",
            "Add soy sauce, ginger, and garlic, toss to coat.",
            "Serve hot over rice or noodles."
          ],
          is_favorite: false,
          is_deleted: false
        },
        {
          id: 3,
          name: "Chocolate Chip Cookies",
          description: "Classic homemade chocolate chip cookies with a soft center.",
          prep_time: 15,
          cook_time: 12,
          servings: 24,
          difficulty: "Easy",
          category: "Dessert",
          image_url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=500&auto=format&fit=crop",
          ingredients: [
            { id: 11, name: "Butter", amount: 225, unit: "g" },
            { id: 12, name: "Brown sugar", amount: 150, unit: "g" },
            { id: 13, name: "White sugar", amount: 100, unit: "g" },
            { id: 14, name: "Eggs", amount: 2, unit: "large" },
            { id: 15, name: "Vanilla extract", amount: 5, unit: "ml" },
            { id: 16, name: "All-purpose flour", amount: 280, unit: "g" },
            { id: 17, name: "Chocolate chips", amount: 200, unit: "g" }
          ],
          instructions: [
            "Cream together butter and sugars until light and fluffy.",
            "Beat in eggs and vanilla extract.",
            "Mix in flour, baking soda, and salt until just combined.",
            "Fold in chocolate chips.",
            "Drop spoonfuls of dough onto baking sheets.",
            "Bake at 350°F for 10-12 minutes until edges are golden."
          ],
          is_favorite: true,
          is_deleted: false
        },
        {
          id: 4,
          name: "Greek Salad",
          description: "Fresh Mediterranean salad with feta cheese and olives.",
          prep_time: 15,
          cook_time: 0,
          servings: 4,
          difficulty: "Easy",
          category: "Salad",
          image_url: "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=500&auto=format&fit=crop",
          ingredients: [
            { id: 18, name: "Cucumber", amount: 1, unit: "large" },
            { id: 19, name: "Tomatoes", amount: 4, unit: "medium" },
            { id: 20, name: "Red onion", amount: 1, unit: "small" },
            { id: 21, name: "Feta cheese", amount: 150, unit: "g" },
            { id: 22, name: "Olive oil", amount: 60, unit: "ml" },
            { id: 23, name: "Kalamata olives", amount: 50, unit: "g" }
          ],
          instructions: [
            "Chop cucumber, tomatoes, and red onion into bite-sized pieces.",
            "Crumble feta cheese over the vegetables.",
            "Add olives and drizzle with olive oil and vinegar.",
            "Season with oregano, salt, and pepper.",
            "Toss gently and serve immediately."
          ],
          is_favorite: false,
          is_deleted: false
        }
      ];
      
      setRecipes(response);
      setFilteredRecipes(response);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch recipes:", error);
      setLoading(false);
    }
  };
  
  const applyFilters = () => {
    let result = [...recipes];
    
    // Filter out deleted recipes
    result = result.filter(item => !item.is_deleted);
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        item => item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (filters.category !== "all") {
      result = result.filter(item => item.category === filters.category);
    }
    
    // Apply time filters
    if (filters.timeMin) {
      result = result.filter(item => (item.prep_time + item.cook_time) >= Number(filters.timeMin));
    }
    if (filters.timeMax) {
      result = result.filter(item => (item.prep_time + item.cook_time) <= Number(filters.timeMax));
    }
    
    // Apply difficulty filter
    if (filters.difficulty !== "all") {
      result = result.filter(item => item.difficulty === filters.difficulty);
    }
    
    // Apply favorite filter
    if (filters.favorite) {
      result = result.filter(item => item.is_favorite);
    }
    
    // Apply sorting
    if (sortConfig.key) {
      result.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    
    setFilteredRecipes(result);
  };
  
  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  
  const resetFilters = () => {
    setFilters({
      category: 'all',
      timeMin: '',
      timeMax: '',
      difficulty: 'all',
      favorite: false
    });
    setSearchTerm('');
    setShowFilterModal(false);
  };
  
  const handleToggleFavorite = async (id) => {
    // In a real app, you'd call an API here
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === id) {
        return { ...recipe, is_favorite: !recipe.is_favorite };
      }
      return recipe;
    });
    
    setRecipes(updatedRecipes);
    
    // If the detail modal is open and we're toggling the current recipe
    if (showDetailModal && currentRecipe && currentRecipe.id === id) {
      setCurrentRecipe({ ...currentRecipe, is_favorite: !currentRecipe.is_favorite });
    }
  };
  
  const handleDeleteRecipe = async (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      // In a real app, you'd call an API here
      const updatedRecipes = recipes.map(recipe => {
        if (recipe.id === id) {
          return { ...recipe, is_deleted: true };
        }
        return recipe;
      });
      
      setRecipes(updatedRecipes);
      
      // If the detail modal is open and we're deleting the current recipe
      if (showDetailModal && currentRecipe && currentRecipe.id === id) {
        setShowDetailModal(false);
      }
    }
  };
  
  const handleAddRecipe = async (newRecipe) => {
    // In a real app, you'd call an API here
    const recipeWithId = {
      ...newRecipe,
      id: recipes.length + 1,
      is_favorite: false,
      is_deleted: false
    };
    
    setRecipes([...recipes, recipeWithId]);
    setShowAddModal(false);
  };
  
  const handleUpdateRecipe = async (updatedRecipe) => {
    // In a real app, you'd call an API here
    const updatedRecipes = recipes.map(recipe => {
      if (recipe.id === updatedRecipe.id) {
        return updatedRecipe;
      }
      return recipe;
    });
    
    setRecipes(updatedRecipes);
    setShowEditModal(false);
    
    // If the detail modal is open, update the current recipe
    if (showDetailModal && currentRecipe && currentRecipe.id === updatedRecipe.id) {
      setCurrentRecipe(updatedRecipe);
    }
  };
  
  const getTotalTime = (prep, cook) => {
    return prep + cook;
  };
  
  return (
    <div className={`recipes-view ${darkMode ? 'dark' : 'light'}`}>
      <div className="recipes-header">
        <div className="recipes-title-section">
          <h1 className="recipes-title">Recipes Library</h1>
          <p className="recipes-subtitle">Browse and manage your saved recipes</p>
        </div>
        <div className="recipes-actions">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`search-input ${darkMode ? 'dark' : 'light'}`}
            />
            {searchTerm && (
              <button
                className="clear-search"
                onClick={() => setSearchTerm("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            className={`btn-filter ${darkMode ? 'dark' : 'light'}`}
            onClick={() => setShowFilterModal(true)}
          >
            <Filter size={18} className="btn-icon" />
            Filter
          </button>
          <button
            className="btn-add"
            onClick={() => setShowAddModal(true)}
          >
            <Plus size={18} className="btn-icon" />
            New Recipe
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading recipes...</p>
        </div>
      ) : filteredRecipes.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🍲</div>
          <p>No recipes found matching your criteria.</p>
          {(searchTerm || filters.category !== "all" || 
           filters.timeMin || filters.timeMax || 
           filters.difficulty !== "all" || filters.favorite) && (
            <button 
              className="btn-reset-filters"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map(recipe => (
            <div 
              key={recipe.id} 
              className={`recipe-card ${darkMode ? 'dark' : 'light'}`}
              onClick={() => {
                setCurrentRecipe(recipe);
                setShowDetailModal(true);
              }}
            >
              <div className="recipe-card-image-container">
                <img 
                  src={recipe.image_url} 
                  alt={recipe.name} 
                  className="recipe-card-image" 
                />
                <button 
                  className={`favorite-button ${recipe.is_favorite ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleFavorite(recipe.id);
                  }}
                >
                  <Heart size={16} fill={recipe.is_favorite ? "#ef4444" : "none"} />
                </button>
                <div className="recipe-category">
                  <span className={`category-pill ${recipe.category.toLowerCase()}`}>
                    {recipe.category}
                  </span>
                </div>
              </div>
              <div className="recipe-card-content">
                <h3 className="recipe-card-title">{recipe.name}</h3>
                <p className="recipe-card-description">{recipe.description}</p>
                <div className="recipe-card-meta">
                  <div className="recipe-meta-item">
                    <Clock size={14} />
                    <span>{getTotalTime(recipe.prep_time, recipe.cook_time)} min</span>
                  </div>
                  <div className="recipe-meta-item">
                    <Users size={14} />
                    <span>{recipe.servings} servings</span>
                  </div>
                  <div className="recipe-meta-item">
                    <ChefHat size={14} />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>
                <div className="recipe-card-actions">
                  <button 
                    className="recipe-action-btn view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentRecipe(recipe);
                      setShowDetailModal(true);
                    }}
                  >
                    <BookOpen size={14} /> View
                  </button>
                  <button 
                    className="recipe-action-btn edit-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentRecipe(recipe);
                      setShowEditModal(true);
                    }}
                  >
                    <Edit size={14} /> Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <RecipeFilterModal 
          filters={filters}
          setFilters={setFilters}
          recipeCategories={recipeCategories}
          difficultyLevels={difficultyLevels}
          onClose={() => setShowFilterModal(false)}
          onReset={resetFilters}
          darkMode={darkMode}
        />
      )}

      {/* Recipe Detail Modal */}
      {showDetailModal && currentRecipe && (
        <RecipeDetailModal 
          recipe={currentRecipe}
          onClose={() => setShowDetailModal(false)}
          onToggleFavorite={() => handleToggleFavorite(currentRecipe.id)}
          onEdit={() => {
            setShowDetailModal(false);
            setShowEditModal(true);
          }}
          onDelete={() => handleDeleteRecipe(currentRecipe.id)}
          darkMode={darkMode}
        />
      )}

      {/* Add/Edit Recipe Modal would be implemented here */}
      {/* For brevity, I'm not including the full implementation of these modals */}
    </div>
  );
};

// Filter Modal Component
const RecipeFilterModal = ({ filters, setFilters, recipeCategories, difficultyLevels, onClose, onReset, darkMode }) => {
  const [localFilters, setLocalFilters] = useState({...filters});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const applyFilters = () => {
    setFilters(localFilters);
    onClose();
  };
  
  return (
    <div className="modal-backdrop">
      <div className={`modal-container filter-modal ${darkMode ? 'dark' : 'light'}`}>
        <div className="modal-header">
          <h2>Filter Recipes</h2>
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="filter-group">
            <label>Recipe Category</label>
            <select
              name="category"
              value={localFilters.category}
              onChange={handleChange}
              className={`filter-select ${darkMode ? 'dark' : 'light'}`}
            >
              <option value="all">All Categories</option>
              {recipeCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>Difficulty Level</label>
            <select
              name="difficulty"
              value={localFilters.difficulty}
              onChange={handleChange}
              className={`filter-select ${darkMode ? 'dark' : 'light'}`}
            >
              <option value="all">All Levels</option>
              {difficultyLevels.map((level, index) => (
                <option key={index} value={level}>{level}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <label>Total Time (min)</label>
              <div className="range-inputs">
                <input
                  type="number"
                  name="timeMin"
                  value={localFilters.timeMin}
                  onChange={handleChange}
                  placeholder="Min"
                  min="0"
                  className={`filter-input ${darkMode ? 'dark' : 'light'}`}
                />
                <span className="range-separator">to</span>
                <input
                  type="number"
                  name="timeMax"
                  value={localFilters.timeMax}
                  onChange={handleChange}
                  placeholder="Max"
                  min="0"
                  className={`filter-input ${darkMode ? 'dark' : 'light'}`}
                />
              </div>
            </div>
          </div>
          
          <div className="filter-checkbox">
            <input
              type="checkbox"
              id="favorite"
              name="favorite"
              checked={localFilters.favorite}
              onChange={handleChange}
            />
            <label htmlFor="favorite">Favorites Only</label>
          </div>
        </div>
        
        <div className="modal-footer">
          <button
            className="btn-reset"
            onClick={onReset}
          >
            Reset All
          </button>
          <button
            className="btn-apply"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

// Recipe Detail Modal Component
const RecipeDetailModal = ({ recipe, onClose, onToggleFavorite, onEdit, onDelete, darkMode }) => {
  const [activeTab, setActiveTab] = useState('ingredients');
  
  const totalTime = recipe.prep_time + recipe.cook_time;
  
  return (
    <div className="modal-backdrop">
      <div className={`modal-container recipe-detail-modal ${darkMode ? 'dark' : 'light'}`}>
        <div className="modal-header recipe-detail-header">
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
          <div className="recipe-image-container">
            <img 
              src={recipe.image_url} 
              alt={recipe.name} 
              className="recipe-detail-image" 
            />
            <div className="recipe-image-overlay">
              <div className="recipe-detail-category">
                <span className={`category-pill ${recipe.category.toLowerCase()}`}>
                  {recipe.category}
                </span>
              </div>
              <div className="recipe-detail-actions">
                <button 
                  className={`recipe-action-icon favorite-btn ${recipe.is_favorite ? 'active' : ''}`}
                  onClick={onToggleFavorite}
                  title={recipe.is_favorite ? "Remove from favorites" : "Add to favorites"}
                >
                  <Heart size={20} fill={recipe.is_favorite ? "#ef4444" : "none"} />
                </button>
                <button 
                  className="recipe-action-icon"
                  title="Share recipe"
                >
                  <Share2 size={20} />
                </button>
                <button 
                  className="recipe-action-icon"
                  title="Save to collection"
                >
                  <Bookmark size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add recipe-scroll-container here */}
        <div className="recipe-scroll-container">
          <div className="recipe-detail-content">
            <div className="recipe-title-container">
              <h2 className="recipe-detail-title">{recipe.name}</h2>
              <p className="recipe-detail-description">{recipe.description}</p>
            </div>
            
            <div className="recipe-meta-grid">
              <div className="recipe-meta-card">
                <div className="meta-card-icon">
                  <Clock size={18} />
                </div>
                <div className="meta-card-content">
                  <span className="meta-card-value">{totalTime}</span>
                  <span className="meta-card-label">Minutes</span>
                </div>
              </div>
              <div className="recipe-meta-card">
                <div className="meta-card-icon">
                  <Users size={18} />
                </div>
                <div className="meta-card-content">
                  <span className="meta-card-value">{recipe.servings}</span>
                  <span className="meta-card-label">Servings</span>
                </div>
              </div>
              <div className="recipe-meta-card">
                <div className="meta-card-icon">
                  <ChefHat size={18} />
                </div>
                <div className="meta-card-content">
                  <span className="meta-card-value">{recipe.difficulty}</span>
                  <span className="meta-card-label">Difficulty</span>
                </div>
              </div>
            </div>
            
            <div className="recipe-tabs">
              <button 
                className={`recipe-tab ${activeTab === 'ingredients' ? 'active' : ''}`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button 
                className={`recipe-tab ${activeTab === 'instructions' ? 'active' : ''}`}
                onClick={() => setActiveTab('instructions')}
              >
                Instructions
              </button>
            </div>
            
            <div className="recipe-tab-content">
              {activeTab === 'ingredients' ? (
                <div className="ingredients-list">
                  <h3 className="content-section-title">
                    <span className="section-icon">🥕</span>
                    Ingredients
                  </h3>
                  <ul>
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="ingredient-item">
                        <span className="ingredient-amount">{ingredient.amount} {ingredient.unit}</span>
                        <span className="ingredient-name">{ingredient.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="instructions-list">
                  <h3 className="content-section-title">
                    <span className="section-icon">👨‍🍳</span>
                    Instructions
                  </h3>
                  <ol>
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="instruction-step">
                        <div className="step-number">{index + 1}</div>
                        <div className="step-text">{step}</div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="modal-footer recipe-detail-footer">
          <div className="recipe-footer-actions">
            <button 
              className="btn-edit-recipe" 
              onClick={onEdit}
            >
              <Edit size={16} className="btn-icon" /> Edit Recipe
            </button>
            <button 
              className="btn-delete-recipe" 
              onClick={onDelete}
            >
              <Trash2 size={16} className="btn-icon" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipesView;