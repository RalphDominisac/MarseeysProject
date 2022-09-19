package com.example.marpos.model.item;

import com.example.marpos.types.MenuCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemRequest {
    @NotNull(message = "Name cannot be null")
    @Size(min = 1, message = "Name cannot be empty")
    private String name;

    @Min(value = 10, message = "Minimum is 10")
    private double price;

//    @NotEmpty(message = "Please provide a list of ingredients")
//    private List<@Valid IngredientRequest> ingredientRequests;

    @NotNull(message = "Please pick a category for the item")
    private MenuCategory category;
}