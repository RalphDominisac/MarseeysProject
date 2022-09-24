package com.marseeys.inventory.model.ingredient;

import com.marseeys.inventory.types.IngredientCategory;
import com.marseeys.inventory.types.UnitMeasure;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientRequest {
    @NotNull(message = "Please input a valid name")
    @Size(min = 2, message = "Please input a valid name")
    private String name;
    private String description;

    @NotNull(message = "Category cannot be null")
    private IngredientCategory ingredientCategory;

    @NotNull(message = "Unit measure cannot be null")
    private UnitMeasure unitMeasure;

    @Min(value = 1, message = "Please input a valid quantity")
    private int quantity;

    @Min(value = 1, message = "Please input a reorder point")
    private int threshold;  // reorder point

    @Future(message = "Please enter a valid date")
    @NotNull(message = "Date cannot be null")
    private LocalDateTime expiryDate;
}
