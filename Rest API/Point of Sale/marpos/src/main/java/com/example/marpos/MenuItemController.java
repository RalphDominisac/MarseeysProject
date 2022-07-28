package com.example.marpos;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("api/v1/menu")  // Port 8080
@AllArgsConstructor
// REST API for MenuItems
public class MenuItemController {
    private final MenuItemService menuItemService;

    // GET request handler
    @GetMapping
    public List<MenuItem> fetchAllItems() {
        return menuItemService.getAllItems();
    }

    // POST request handler using item name for menu items
    @PostMapping
    public MenuItem orderItem(@RequestParam(value = "name") String name) {
        return menuItemService.getItem(name);
    }
}
