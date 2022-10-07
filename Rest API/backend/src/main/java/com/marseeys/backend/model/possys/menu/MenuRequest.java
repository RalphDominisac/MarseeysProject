package com.marseeys.backend.model.possys.menu;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuRequest {
    @NotBlank(message = "Please input a name for the menu item.")
    private String name;

    @NotNull(message = "Please input a price for the menu item.")
    @Min(value = 10, message = "Minimum price for a menu item is 10.")
    private double price;

    @NotBlank(message = "Please indicate a valid category for the item.")
    private String category;

//    @NotEmpty(message = "Please provide a list of ingredients")
//    private List<@Valid IngredientRequest> ingredientRequests;
}
