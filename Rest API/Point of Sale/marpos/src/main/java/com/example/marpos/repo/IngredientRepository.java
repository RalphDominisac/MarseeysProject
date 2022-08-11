package com.example.marpos.repo;

import com.example.marpos.model.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;

// Ingredients collection
public interface IngredientRepository extends MongoRepository<Ingredient, String> {
    Ingredient findByNameEqualsIgnoreCase(String name);
}
