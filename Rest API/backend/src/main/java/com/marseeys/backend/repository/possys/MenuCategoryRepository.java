package com.marseeys.backend.repository.possys;

import com.marseeys.backend.entity.possys.menu.MenuCategory;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface MenuCategoryRepository extends MongoRepository<MenuCategory, Integer> {
    @Query("{'name': ?0}")
    Optional<MenuCategory> findCategory(String category);
}
