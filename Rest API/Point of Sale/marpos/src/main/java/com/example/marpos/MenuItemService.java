package com.example.marpos;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
// Service layer of the MenuItem class
public class MenuItemService {
    private final MenuItemRepository menuItemRepository;

    public List<MenuItem> getAllItems() {
        return menuItemRepository.findAll();
    }
}
