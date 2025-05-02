package com.example.projectname.controller;

import com.example.projectname.model.GroceryItem;
import com.example.projectname.service.GroceryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/grocery")
public class ApiController {

    private final GroceryService groceryService;

    @Autowired
    public ApiController(GroceryService groceryService) {
        this.groceryService = groceryService;
    }

    @GetMapping("/items")
    public ResponseEntity<List<GroceryItem>> getAllItems() {
        List<GroceryItem> items = groceryService.getAllItems();
        return ResponseEntity.ok(items);
    }

    @PostMapping("/items")
    public ResponseEntity<GroceryItem> addItem(@RequestBody GroceryItem item) {
        GroceryItem createdItem = groceryService.addItem(item);
        return ResponseEntity.status(201).body(createdItem);
    }

    @PutMapping("/items/{id}")
    public ResponseEntity<GroceryItem> updateItem(@PathVariable Long id, @RequestBody GroceryItem item) {
        GroceryItem updatedItem = groceryService.updateItem(id, item);
        return ResponseEntity.ok(updatedItem);
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        groceryService.deleteItem(id);
        return ResponseEntity.noContent().build();
    }
}