package com.marseeys.backend.repository.invsys;

import com.marseeys.backend.entity.invsys.ingredient.IngredientCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface IngredientCategoryRepository extends MongoRepository<IngredientCategory, Integer> {
    @Query("{'name': ?0}")
    Optional<IngredientCategory> findIngredientCategory(String category);
}
