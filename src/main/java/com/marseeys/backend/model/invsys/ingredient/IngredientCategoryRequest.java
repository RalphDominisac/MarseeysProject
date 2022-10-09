package com.marseeys.backend.model.invsys.ingredient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class IngredientCategoryRequest {
    @NotBlank(message = "Please enter a name for the category.")
    private String name;
}
