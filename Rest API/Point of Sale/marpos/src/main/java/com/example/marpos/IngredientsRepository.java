package com.example.marpos;

import org.springframework.data.mongodb.repository.MongoRepository;

// Ingredients collection
public interface IngredientsRepository extends MongoRepository<Ingredient, String> { }
