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
    private Boolean isDeleted;
    
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    private Set<RecipeIngredient> recipes = new HashSet<>();
    
    @OneToMany(mappedBy = "ingredient", cascade = CascadeType.ALL)
    private Set<ShoppingCartIngredient> shoppingCartItems = new HashSet<>();
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getUnit() {
        return unit;
    }
    
    public void setUnit(String unit) {
        this.unit = unit;
    }
    
    public BigDecimal getDefaultServing() {
        return defaultServing;
    }
    
    public void setDefaultServing(BigDecimal defaultServing) {
        this.defaultServing = defaultServing;
    }
    
    public String getType() {
        return type;
    }
    
    public void setType(String type) {
        this.type = type;
    }
    
    public BigDecimal getCaloriesPerServing() {
        return caloriesPerServing;
    }
    
    public void setCaloriesPerServing(BigDecimal caloriesPerServing) {
        this.caloriesPerServing = caloriesPerServing;
    }
    
    public Boolean getIsDeleted() {
        return isDeleted;
    }
    
    public void setIsDeleted(Boolean isDeleted) {
        this.isDeleted = isDeleted;
    }
    
    public Set<RecipeIngredient> getRecipes() {
        return recipes;
    }
    
    public void setRecipes(Set<RecipeIngredient> recipes) {
        this.recipes = recipes;
    }
    
    public Set<ShoppingCartIngredient> getShoppingCartItems() {
        return shoppingCartItems;
    }
    
    public void setShoppingCartItems(Set<ShoppingCartIngredient> shoppingCartItems) {
        this.shoppingCartItems = shoppingCartItems;
    }
}
