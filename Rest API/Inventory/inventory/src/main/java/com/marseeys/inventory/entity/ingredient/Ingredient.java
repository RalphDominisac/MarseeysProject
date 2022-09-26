package com.marseeys.inventory.entity.ingredient;

import com.marseeys.inventory.types.IngredientCategory;
import com.marseeys.inventory.types.UnitMeasure;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Data
@Document(collection = "Ingredients")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Ingredient {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;
    private String description;
    private IngredientCategory ingredientCategory;
    private UnitMeasure unitMeasure;
    private double quantity;
    private double threshold;  // reorder point
    private boolean deleted;
    @DateTimeFormat
    private LocalDateTime expiryDate;
    @LastModifiedDate
    private LocalDateTime lastUpdate;
}
