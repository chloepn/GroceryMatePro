package com.example.grocerymatepro.model;

import javax.persistence.*; 
import java.math.BigDecimal;
@Entity
@Table(name = "shopping_cart_ingredient")
public class ShoppingCartIngredient {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "reference_id")
    private Long referenceId;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ingredient_id", nullable = false)
    private Ingredient ingredient;
    
    @Column(name = "quantity")
    private BigDecimal quantity;
    
    @Column(name = "unit", length = 20)
    private String unit;
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public Long getReferenceId() {
        return referenceId;
    }
    
    public void setReferenceId(Long referenceId) {
        this.referenceId = referenceId;
    }
    
    public Ingredient getIngredient() {
        return ingredient;
    }
    
    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }
    
    public BigDecimal getQuantity() {
        return quantity;
    }
    
    public void setQuantity(BigDecimal quantity) {
        this.quantity = quantity;
    }
    
    public String getUnit() {
        return unit;
    }
    
    public void setUnit(String unit) {
        this.unit = unit;
    }
}