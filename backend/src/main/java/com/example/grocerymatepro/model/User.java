package com.example.grocerymatepro.model;

import javax.persistence.*; 
import java.util.HashSet;
import java.util.Set;
@Entity
@Table(name = "user")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "phone", length = 20)
    private String phone;
    
    @Column(name = "name", length = 100)
    private String name;
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<ShoppingCart> shoppingCarts = new HashSet<>();
    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private Set<UserFavorite> favorites = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ShoppingCart> getShoppingCarts() {
        return shoppingCarts;
    }

    public void setShoppingCarts(Set<ShoppingCart> shoppingCarts) {
        this.shoppingCarts = shoppingCarts;
    }

    public Set<UserFavorite> getFavorites() {
        return favorites;
    }

    public void setFavorites(Set<UserFavorite> favorites) {
        this.favorites = favorites;
    }
    
}