import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Info, X, ArrowUpDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/views/IngredientsView.css';

const IngredientsView = ({ setActiveView }) => {
  const { darkMode } = useTheme();
  const [ingredients, setIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    type: "all",
    caloriesMin: "",
    caloriesMax: ""
  });
  const [sortConfig, setSortConfig] = useState({
    key: "name",
    direction: "ascending"
  });

  // Mock ingredient types - replace with your actual types from DB
  const ingredientTypes = [
    "Vegetable", "Fruit", "Meat", "Dairy", "Grain", 
    "Legume", "Nut", "Spice", "Herb", "Oil"
  ];

  // Unit types for ingredients
  const unitTypes = [
    "g", "kg", "oz", "lb", "ml", "L", "tsp", "tbsp", "cup", "piece", "serving"
  ];

  // Fetch ingredients on component mount
  useEffect(() => {
    // Replace with actual API call
    fetchIngredients();
  }, []);

  // Apply filters when filter state changes or when ingredients change
  useEffect(() => {
    applyFilters();
  }, [filters, ingredients, searchTerm, sortConfig]);

  const fetchIngredients = async () => {
    setLoading(true);
    // Replace with actual API call
    try {
      // Simulating API response with DB schema fields
      const response = [
        {
          id: 1,
          name: "Tomato",
          unit: "g",
          default_serving: 100,
          type: "Vegetable",
          calories_per_serving: 18,
          is_deleted: false
        },
        {
          id: 2,
          name: "Chicken Breast",
          unit: "g",
          default_serving: 100,
          type: "Meat",
          calories_per_serving: 165,
          is_deleted: false
        },
        {
          id: 3,
          name: "Brown Rice",
          unit: "g",
          default_serving: 100,
          type: "Grain",
          calories_per_serving: 112,
          is_deleted: false
        },
        {
          id: 4,
          name: "Avocado",
          unit: "g",
          default_serving: 100,
          type: "Fruit",
          calories_per_serving: 160,
          is_deleted: false
        }
      ];
      setIngredients(response);
      setFilteredIngredients(response);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch ingredients:", error);
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let result = [...ingredients];

    // Filter out deleted ingredients
    result = result.filter(item => !item.is_deleted);

    // Apply search filter
    if (searchTerm) {
      result = result.filter(
        item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply type filter
    if (filters.type !== "all") {
      result = result.filter(item => item.type === filters.type);
    }

    // Apply calories filters
    if (filters.caloriesMin) {
      result = result.filter(item => item.calories_per_serving >= Number(filters.caloriesMin));
    }
    if (filters.caloriesMax) {
      result = result.filter(item => item.calories_per_serving <= Number(filters.caloriesMax));
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

    setFilteredIngredients(result);
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
      type: "all",
      caloriesMin: "",
      caloriesMax: ""
    });
    setShowFilterModal(false);
  };

  const handleAddIngredient = async (newIngredient) => {
    // Replace with actual API call
    try {
      // Mocking API response with ID assignment
      const updatedIngredient = {
        ...newIngredient,
        id: ingredients.length + 1,
        is_deleted: false
      };
      setIngredients([...ingredients, updatedIngredient]);
      setShowAddModal(false);
    } catch (error) {
      console.error("Failed to add ingredient:", error);
      // Handle error state
    }
  };

  const handleUpdateIngredient = async (updatedIngredient) => {
    // Replace with actual API call
    try {
      const updatedIngredients = ingredients.map(item => 
        item.id === updatedIngredient.id ? updatedIngredient : item
      );
      setIngredients(updatedIngredients);
      setShowEditModal(false);
    } catch (error) {
      console.error("Failed to update ingredient:", error);
      // Handle error state
    }
  };

  const handleDeleteIngredient = async (id) => {
    if (window.confirm("Are you sure you want to delete this ingredient?")) {
      // Replace with actual API call - soft delete by setting is_deleted flag
      try {
        const updatedIngredients = ingredients.map(item => 
          item.id === id ? {...item, is_deleted: true} : item
        );
        setIngredients(updatedIngredients);
      } catch (error) {
        console.error("Failed to delete ingredient:", error);
        // Handle error state
      }
    }
  };

  return (
    <div className={`ingredients-view ${darkMode ? 'dark' : 'light'}`}>
      <div className="ingredients-header">
        <h1 className="ingredients-title">Ingredients</h1>
        <div className="ingredients-actions">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search ingredients..."
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
            Add Ingredient
          </button>
        </div>
      </div>

      {loading ? (
        <div className="loading-state">
          <div className="loading-spinner"></div>
          <p>Loading ingredients...</p>
        </div>
      ) : filteredIngredients.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🥗</div>
          <p>No ingredients found matching your criteria.</p>
          {(searchTerm || filters.type !== "all" || 
          filters.caloriesMin || filters.caloriesMax) && (
            <button 
              className="btn-reset-filters"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          )}
        </div>
      ) : (
        <div className="ingredients-table-wrapper">
          <table className={`ingredients-table ${darkMode ? 'dark' : 'light'}`}>
            <thead>
              <tr>
                <th onClick={() => handleSort('name')}>
                  Name {sortConfig.key === 'name' && (
                    <ArrowUpDown size={16} className={`sort-icon ${sortConfig.direction}`} />
                  )}
                </th>
                <th onClick={() => handleSort('unit')}>
                  Unit {sortConfig.key === 'unit' && (
                    <ArrowUpDown size={16} className={`sort-icon ${sortConfig.direction}`} />
                  )}
                </th>
                <th onClick={() => handleSort('type')}>
                  Type {sortConfig.key === 'type' && (
                    <ArrowUpDown size={16} className={`sort-icon ${sortConfig.direction}`} />
                  )}
                </th>
                <th onClick={() => handleSort('default_serving')}>
                  Serving {sortConfig.key === 'default_serving' && (
                    <ArrowUpDown size={16} className={`sort-icon ${sortConfig.direction}`} />
                  )}
                </th>
                <th onClick={() => handleSort('calories_per_serving')}>
                  Calories {sortConfig.key === 'calories_per_serving' && (
                    <ArrowUpDown size={16} className={`sort-icon ${sortConfig.direction}`} />
                  )}
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredIngredients.map(ingredient => (
                <tr key={ingredient.id} className="ingredient-row">
                  <td className="ingredient-name">{ingredient.name}</td>
                  <td>
                    <span className="unit-pill">{ingredient.unit}</span>
                  </td>
                  <td>
                    <span className={`type-pill ${ingredient.type.toLowerCase()}`}>
                      {ingredient.type}
                    </span>
                  </td>
                  <td className="serving-cell">
                    <span className="serving-value">{ingredient.default_serving}</span>
                    <span className="serving-unit">{ingredient.unit}</span>
                  </td>
                  <td className="calories-cell">
                    <span className="calories-badge">{ingredient.calories_per_serving}</span>
                  </td>
                  <td className="action-buttons">
                    <button 
                      className="btn-info"
                      onClick={() => {
                        setCurrentIngredient(ingredient);
                        setShowDetailModal(true);
                      }}
                      title="View details"
                    >
                      <Info size={16} />
                    </button>
                    <button 
                      className="btn-edit"
                      onClick={() => {
                        setCurrentIngredient(ingredient);
                        setShowEditModal(true);
                      }}
                      title="Edit ingredient"
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      className="btn-delete"
                      onClick={() => handleDeleteIngredient(ingredient.id)}
                      title="Delete ingredient"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <FilterModal 
          filters={filters}
          setFilters={setFilters}
          ingredientTypes={ingredientTypes}
          onClose={() => setShowFilterModal(false)}
          onReset={resetFilters}
          darkMode={darkMode}
        />
      )}

      {/* Add Ingredient Modal */}
      {showAddModal && (
        <IngredientFormModal
          title="Add New Ingredient"
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddIngredient}
          ingredientTypes={ingredientTypes}
          unitTypes={unitTypes}
          darkMode={darkMode}
        />
      )}

      {/* Edit Ingredient Modal */}
      {showEditModal && currentIngredient && (
        <IngredientFormModal
          title="Edit Ingredient"
          ingredient={currentIngredient}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleUpdateIngredient}
          ingredientTypes={ingredientTypes}
          unitTypes={unitTypes}
          darkMode={darkMode}
        />
      )}

      {/* Ingredient Detail Modal */}
      {showDetailModal && currentIngredient && (
        <IngredientDetailModal
          ingredient={currentIngredient}
          onClose={() => setShowDetailModal(false)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

// Filter Modal Component
const FilterModal = ({ filters, setFilters, ingredientTypes, onClose, onReset, darkMode }) => {
  const [localFilters, setLocalFilters] = useState({...filters});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const applyFilters = () => {
    setFilters(localFilters);
    onClose();
  };
  
  return (
    <div className="modal-backdrop">
      <div className={`modal-container ${darkMode ? 'dark' : 'light'}`}>
        <div className="modal-header">
          <h2>Filter Ingredients</h2>
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <div className="filter-group">
            <label>Ingredient Type</label>
            <select
              name="type"
              value={localFilters.type}
              onChange={handleChange}
              className={`filter-select ${darkMode ? 'dark' : 'light'}`}
            >
              <option value="all">All Types</option>
              {ingredientTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <label>Calories (min)</label>
              <input
                type="number"
                name="caloriesMin"
                value={localFilters.caloriesMin}
                onChange={handleChange}
                placeholder="Min"
                className={`filter-input ${darkMode ? 'dark' : 'light'}`}
              />
            </div>
            <div className="filter-group">
              <label>Calories (max)</label>
              <input
                type="number"
                name="caloriesMax"
                value={localFilters.caloriesMax}
                onChange={handleChange}
                placeholder="Max"
                className={`filter-input ${darkMode ? 'dark' : 'light'}`}
              />
            </div>
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

// Ingredient Form Modal Component
const IngredientFormModal = ({ title, ingredient, onClose, onSubmit, ingredientTypes, unitTypes, darkMode }) => {
  const [formData, setFormData] = useState(
    ingredient ? {...ingredient} : {
      name: "",
      unit: "g",
      default_serving: 100,
      type: "",
      calories_per_serving: "",
      is_deleted: false
    }
  );
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error when field is edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.unit) newErrors.unit = "Unit is required";
    if (!formData.type) newErrors.type = "Type is required";
    
    // Validate numeric fields
    if (formData.default_serving === "") newErrors.default_serving = "Default serving is required";
    else if (isNaN(formData.default_serving)) newErrors.default_serving = "Must be a number";
    
    if (formData.calories_per_serving === "") newErrors.calories_per_serving = "Calories is required";
    else if (isNaN(formData.calories_per_serving)) newErrors.calories_per_serving = "Must be a number";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Convert numeric fields to numbers
      const submitData = {
        ...formData,
        default_serving: Number(formData.default_serving),
        calories_per_serving: Number(formData.calories_per_serving)
      };
      
      onSubmit(submitData);
    }
  };
  
  return (
    <div className="modal-backdrop">
      <div className={`modal-container ${darkMode ? 'dark' : 'light'}`}>
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="ingredient-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  maxLength={100}
                  className={`form-input ${errors.name ? 'error' : ''} ${darkMode ? 'dark' : 'light'}`}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="type">Type *</label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className={`form-select ${errors.type ? 'error' : ''} ${darkMode ? 'dark' : 'light'}`}
                >
                  <option value="">Select a type</option>
                  {ingredientTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.type && <div className="error-message">{errors.type}</div>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="unit">Unit *</label>
                <select
                  id="unit"
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className={`form-select ${errors.unit ? 'error' : ''} ${darkMode ? 'dark' : 'light'}`}
                >
                  <option value="">Select a unit</option>
                  {unitTypes.map((unit, index) => (
                    <option key={index} value={unit}>{unit}</option>
                  ))}
                </select>
                {errors.unit && <div className="error-message">{errors.unit}</div>}
              </div>
              
              <div className="form-group">
                <label htmlFor="default_serving">Default Serving *</label>
                <input
                  type="number"
                  id="default_serving"
                  name="default_serving"
                  value={formData.default_serving}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className={`form-input ${errors.default_serving ? 'error' : ''} ${darkMode ? 'dark' : 'light'}`}
                />
                {errors.default_serving && <div className="error-message">{errors.default_serving}</div>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="calories_per_serving">Calories per Serving *</label>
                <input
                  type="number"
                  id="calories_per_serving"
                  name="calories_per_serving"
                  value={formData.calories_per_serving}
                  onChange={handleChange}
                  step="0.1"
                  min="0"
                  className={`form-input ${errors.calories_per_serving ? 'error' : ''} ${darkMode ? 'dark' : 'light'}`}
                />
                {errors.calories_per_serving && <div className="error-message">{errors.calories_per_serving}</div>}
              </div>
            </div>
            
            <div className="modal-footer">
              <button type="button" className="btn-cancel" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn-submit">
                {ingredient ? 'Update Ingredient' : 'Add Ingredient'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Ingredient Detail Modal Component
const IngredientDetailModal = ({ ingredient, onClose, darkMode }) => {
  return (
    <div className="modal-backdrop">
      <div className={`modal-container detail-modal ${darkMode ? 'dark' : 'light'}`}>
        <div className="modal-header ingredient-detail-header">
          <div className="ingredient-title-container">
            <span className="ingredient-badge">{ingredient.type}</span>
            <h2 className="ingredient-title">{ingredient.name}</h2>
          </div>
          <button className="btn-close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>
        
        <div className="modal-body ingredient-detail-body">
          <div className="detail-content">
            <div className="detail-section basic-info-section">
              <h3 className="section-title">
                <span className="section-icon">📋</span>
                Basic Information
              </h3>
              <div className="info-card">
                <div className="detail-row">
                  <div className="detail-label">Type:</div>
                  <div className="detail-value">
                    <span className="type-badge">{ingredient.type}</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Unit:</div>
                  <div className="detail-value">
                    <span className="unit-badge">{ingredient.unit}</span>
                  </div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">Default Serving:</div>
                  <div className="detail-value highlight-value">
                    <span className="serving-amount">{ingredient.default_serving}</span>
                    <span className="serving-unit">{ingredient.unit}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="detail-section nutrition-section">
              <h3 className="section-title">
                <span className="section-icon">🔥</span>
                Nutritional Information
              </h3>
              <div className="nutrition-card">
                <div className="nutrition-item">
                  <div className="nutrition-value-container">
                    <div className="nutrition-value">{ingredient.calories_per_serving}</div>
                  </div>
                  <div className="nutrition-label">Calories per serving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer detail-modal-footer">
          <div className="modal-actions">
            <button 
              className="btn-edit-detail" 
              onClick={() => {
                onClose();
                // You would need to add a callback to open edit modal here
                // but for simplicity, we'll just close this modal for now
              }}
            >
              <Edit size={16} className="btn-icon" /> Edit
            </button>
            <button className="btn-close-detail" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientsView;