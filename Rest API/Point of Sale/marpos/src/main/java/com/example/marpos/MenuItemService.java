package com.example.marpos;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
    public Optional<List<MenuItem>> searchItem(String name) {
        return menuItemRepository.findMenuItemsByNameContainingIgnoreCase(name);
    }

    // Creates a new item document
    public void createItem(MenuItem item) {
        menuItemRepository.insert(item);
    }

    // Updates an item that exists in the database
    public void updateItem(MenuItem item) {
        menuItemRepository.save(item);
    }

    // Updates an item that exists in the database
    public void deleteItem(MenuItem item) {
        menuItemRepository.save(item);
    }
}
