package com.example.marpos.repo;

import com.example.marpos.constant.MenuType;
import com.example.marpos.model.MenuItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

// Menu collection
public interface MenuItemRepository extends MongoRepository<MenuItem, String> {
    Optional<List<MenuItem>> findMenuItemsByNameContainingIgnoreCase(String name);
    Optional<List<MenuItem>> findMenuItemsByTypeIs(MenuType type);
}
