package com.example.grocerymatepro.model;

import javax.persistence.*; 
@Entity
@Table(name = "shopping_list_sms_log")
public class ShoppingListSmsLog {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", nullable = false)
    private ShoppingCart shoppingCart;
    
    @Column(name = "phone", length = 20)
    private String phone;
    
    @Column(name = "message", columnDefinition = "TEXT")
    private String message;
    
    @Column(name = "status", columnDefinition = "ENUM('sent','delivered','failed')")
    @Enumerated(EnumType.STRING)
    private SmsStatus status;
    
    @Column(name = "response", columnDefinition = "TEXT")
    private String response;
    
    // Enum for SMS status
    public enum SmsStatus {
        SENT,
        DELIVERED,
        FAILED
    }
    
    // Getters and Setters
    public Long getId() {
        return id;
    }
    
    public void setId(Long id) {
        this.id = id;
    }
    
    public ShoppingCart getShoppingCart() {
        return shoppingCart;
    }
    
    public void setShoppingCart(ShoppingCart shoppingCart) {
        this.shoppingCart = shoppingCart;
    }
    
    public String getPhone() {
        return phone;
    }
    
    public void setPhone(String phone) {
        this.phone = phone;
    }
    
    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
    
    public SmsStatus getStatus() {
        return status;
    }
    
    public void setStatus(SmsStatus status) {
        this.status = status;
    }
    
    public String getResponse() {
        return response;
    }
    
    public void setResponse(String response) {
        this.response = response;
    }
}