package com.example.projectname.service;

import com.example.projectname.model.GroceryItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GroceryService {

    private final List<GroceryItem> groceryItems = new ArrayList<>();

    public List<GroceryItem> getAllGroceryItems() {
        return new ArrayList<>(groceryItems);
    }

    public GroceryItem addGroceryItem(GroceryItem item) {
        groceryItems.add(item);
        return item;
    }

    public GroceryItem updateGroceryItem(int index, GroceryItem item) {
        if (index >= 0 && index < groceryItems.size()) {
            groceryItems.set(index, item);
            return item;
        }
        return null;
    }

    public boolean deleteGroceryItem(int index) {
        if (index >= 0 && index < groceryItems.size()) {
            groceryItems.remove(index);
            return true;
        }
        return false;
    }
}