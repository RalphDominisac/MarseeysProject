package com.marseeys.backend.model.invsys.ingredient;

import com.marseeys.backend.types.UnitMeasure;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditIngredientRequest {
    @NotBlank(message = "Please input a valid name")
    private String name;

    @NotBlank(message = "Category cannot be null")
    private String ingredientCategory;

    @NotNull(message = "Unit measure cannot be null")
    private UnitMeasure unitMeasure;

    @Min(value = 1, message = "Please input a reorder point")
    private int threshold;  // reorder point

    @Future(message = "Please enter a valid date")
    @NotNull(message = "Date cannot be null")
    private LocalDate expiryDate;
}
