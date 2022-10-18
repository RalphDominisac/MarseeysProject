package com.marseeys.backend.repository.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface IngredientRepository extends MongoRepository<Ingredient, Integer> {
    @Query("{'deleted': false}")
    List<Ingredient> viewIngredients();
}
