package com.example.marpos;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

// Ingredients collection
public interface IngredientRepository extends MongoRepository<Ingredient, String> {

}
