package com.marseeys.backend.entity.invsys.ingredient;

import com.marseeys.backend.types.UnitMeasure;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collection = "Ingredients")
public class Ingredient {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;
    @DocumentReference(collection = "IngredientCategories")
    private IngredientCategory ingredientCategory;
    private UnitMeasure unitMeasure;
    private double quantity;
    private double threshold;
    private boolean deleted;
    @LastModifiedDate
    private LocalDateTime lastUpdate;

    public Ingredient(int id, String name, IngredientCategory ingredientCategory, UnitMeasure unitMeasure, double threshold) {
        this.id = id;
        this.name = name;
        this.ingredientCategory = ingredientCategory;
        this.unitMeasure = unitMeasure;
        this.quantity = 0;
        this.threshold = threshold;
        this.deleted = false;
        this.lastUpdate = LocalDateTime.now();
    }
}
