package com.example.marpos.repository;

import com.example.marpos.enumeration.ItemType;
import com.example.marpos.entity.item.Item;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;


public interface ItemRepository extends MongoRepository<Item, Integer> {
    Optional<List<Item>> findMenuItemsByTypeIs(ItemType type);
    Optional<List<Item>> findMenuItemsByNameContainingIgnoreCase(String name);
}
