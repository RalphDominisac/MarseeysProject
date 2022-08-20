package com.example.marpos.repository;

import com.example.marpos.enumeration.ItemType;
import com.example.marpos.entity.item.Item;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends MongoRepository<Item, Integer> {
    @Query("{'type': ?0, 'isDeleted': false}")
    List<Item> findItemsByTypeEquals(ItemType type);
    List<Item> findItemsByNameContainingIgnoreCase(String name);
}
