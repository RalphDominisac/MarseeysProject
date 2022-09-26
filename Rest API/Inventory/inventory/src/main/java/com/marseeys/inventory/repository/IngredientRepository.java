package com.marseeys.inventory.repository;

import com.marseeys.inventory.entity.ingredient.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface IngredientRepository extends MongoRepository<Ingredient, Integer> {
    @Query("{'deleted': false}")
    List<Ingredient> viewAll();
}
