package com.example.marpos.menuitem;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/menu")  // Port 8080
@AllArgsConstructor
// REST API for MenuItems
public class MenuItemController {
    private final MenuItemService menuItemService;

    // GET request handler
    @GetMapping
    public Optional<List<MenuItem>> fetchItems(@RequestParam(value = "type") MenuType type) {
        return menuItemService.getItems(type);
    }

    // POST request handler for searching items
    @PostMapping
    public Optional<List<MenuItem>> searchItem(@RequestParam(value = "name") String name) {
        return menuItemService.searchItem(name);
    }

    // Creating an item to be added to the menu
    @PostMapping
    public void createItem(@RequestBody MenuItem item) {
        menuItemService.createItem(item);
    }

    // Updating an item in the menu
    @PostMapping
    public void updateItem(@RequestBody MenuItem item) {
        menuItemService.updateItem(item);
    }

    // Deleting an item from the menu
    @PostMapping
    public void deleteItem(@RequestBody MenuItem item) {
        menuItemService.deleteItem(item);
    }
}
