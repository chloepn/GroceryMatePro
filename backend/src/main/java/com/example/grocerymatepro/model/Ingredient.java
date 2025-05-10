package com.example.grocerymatepro.model;

import javax.persistence.*; 
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ingredient")
public class Ingredient {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "name", length = 100)
    private String name;
    
    @Column(name = "unit", length = 20)
    private String unit;
    
    @Column(name = "default_serving")
    private BigDecimal defaultServing;
    
    @Column(name = "type", length = 50)
    private String type;
    
    @Column(name = "calories_per_serving")
    private BigDecimal caloriesPerServing;
    
    @Column(name = "is_deleted")
    private Boolean isDeleted = false;  // Default value
    
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    private Set<RecipeIngredient> recipes = new HashSet<>();
    
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    private Set<ShoppingCartIngredient> shoppingCartItems = new HashSet<>();
    
    // Rest of the getters and setters remain the same
}