package com.example.marpos.ingredient;

import org.springframework.data.mongodb.repository.MongoRepository;

// Ingredients collection
public interface IngredientRepository extends MongoRepository<Ingredient, String> {
    Ingredient findByNameEqualsIgnoreCase(String name);
}
