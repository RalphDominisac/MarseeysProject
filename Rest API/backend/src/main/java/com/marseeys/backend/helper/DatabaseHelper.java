package com.marseeys.backend.helper;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@AllArgsConstructor
public class DatabaseHelper {
    private final FindHelper findHelper;

    public Map<Ingredient, Double> checkIngredientsExist(Map<Integer, Double> ingredientIds) throws DatabaseException {
        Map<Ingredient, Double> ingredientContents = new HashMap<>();

        for (Map.Entry<Integer, Double> entry : ingredientIds.entrySet()) {
            ingredientContents.put(findHelper.findIngredient(entry.getKey()), entry.getValue());
        }

        return ingredientContents;
    }

    public Map<Menu, Integer> checkMenusExist(Map<Integer, Integer> menuIds) throws DatabaseException {
        Map<Menu, Integer> contents = new HashMap<>();

        for (Map.Entry<Integer, Integer> entry : menuIds.entrySet()) {
            contents.put(findHelper.findMenu((entry.getKey())), entry.getValue());
        }

        return contents;
    }

    public Map<Ingredient, Double> getTotalDeductions(Order order) {
        Map<Ingredient, Double> totalDeductions = new HashMap<>();

        for (Map.Entry<Menu, Integer> menuEntry : order.getContents().entrySet()) {
            int menuQuantity = menuEntry.getValue();


            for (Map.Entry<Ingredient, Double> ingredientEntry : menuEntry.getKey().getIngredients().entrySet()) {
                Ingredient ingredient = ingredientEntry.getKey();
                double ingredientQuantity = ingredientEntry.getValue();
                double ingredientDeduction = menuQuantity * ingredientQuantity;

                if (!totalDeductions.containsKey(ingredient)) totalDeductions.put(ingredient, ingredientDeduction);
                else totalDeductions.put(ingredient, totalDeductions.get(ingredient) + ingredientDeduction);
            }
        }

        return totalDeductions;
    }
}
