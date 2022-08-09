package com.example.marpos.menuitem;

import com.example.marpos.ingredient.Ingredient;
import com.example.marpos.ingredient.IngredientService;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class MenuItem {
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private double price;
    private List<Ingredient> ingredients;
    private MenuType type;
    private boolean isAvailable;

    // Added to edit price from front-end
    public void setPrice(double price) {
        this.price = price;
    }

    public MenuItem(String name, double price, List<Ingredient> ingredients, MenuType type) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
        this.isAvailable = checkAvailability(ingredients);
    }

    // Subject for testing
    public boolean checkAvailability(List<Ingredient> ingredients) {
        final IngredientService ingredientService = null;

        boolean available = true;

        for(Ingredient item : ingredients) {
            if(item.getQuantity() < ingredientService.searchItem(item.getName()).getQuantity()) {
                available = false;
                break;
            }
        }

        return available;
    }
}
