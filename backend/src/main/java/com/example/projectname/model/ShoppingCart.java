
@Entity
@Table(name = "shopping_cart")
public class ShoppingCart {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @Column(name = "status", length = 20)
    private String status;
    
    @OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL)
    private Set<ShoppingCartItem> items = new HashSet<>();
    
    @OneToMany(mappedBy = "shoppingCart", cascade = CascadeType.ALL)
    private Set<ShoppingListSmsLog> smsLogs = new HashSet<>();
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public User getUser() {
        return user;
    }
    
    public void setUser(User user) {
        this.user = user;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
    
    public Set<ShoppingCartItem> getItems() {
        return items;
    }
    
    public void setItems(Set<ShoppingCartItem> items) {
        this.items = items;
    }
    
    public Set<ShoppingListSmsLog> getSmsLogs() {
        return smsLogs;
    }
    
    public void setSmsLogs(Set<ShoppingListSmsLog> smsLogs) {
        this.smsLogs = smsLogs;
    }
}