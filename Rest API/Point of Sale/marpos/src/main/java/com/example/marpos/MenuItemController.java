package com.example.marpos;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;
import java.util.List;

@RestController
@RequestMapping("api/v1/menu")
@AllArgsConstructor
// REST API for MenuItems
public class MenuItemController {
    private final MenuItemService menuItemService;

    @GetMapping
    public List<MenuItem> fetchAllItems() {
        return menuItemService.getAllItems();
    }


}
