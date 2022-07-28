package com.example.marpos;

import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
// Service layer of the MenuItem class
public class MenuItemService {
    private final MenuItemRepository menuItemRepository;


    // Returns a list of all menu items in database
    public List<MenuItem> getAllItems() {
        return menuItemRepository.findAll();
    }

    // Returns a single menu item based on input
    public MenuItem getItem(String name) {
        return menuItemRepository.findByNameEqualsIgnoreCase(name);
    }
}
