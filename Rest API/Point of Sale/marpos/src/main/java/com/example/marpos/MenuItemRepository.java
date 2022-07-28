package com.example.marpos;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

// Menu collection
public interface MenuItemRepository extends MongoRepository<MenuItem, String> { }
