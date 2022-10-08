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

    public Map<String, Double> checkIngredientsExist(Map<String, Double> ingredientIds) throws DatabaseException {
        Map<String, Double> ingredientContents = new HashMap<>();

        for (Map.Entry<String, Double> entry : ingredientIds.entrySet()) {
            Ingredient ingredient = findHelper.findIngredient(Integer.parseInt(entry.getKey()));
            ingredientContents.put(String.valueOf(ingredient.getId()), entry.getValue());
        }

        return ingredientContents;
    }

    public Map<String, Integer> checkMenusExist(Map<String, Integer> menuIds) throws DatabaseException {
        Map<String, Integer> contents = new HashMap<>();

        for (Map.Entry<String, Integer> entry : menuIds.entrySet()) {
            Menu menu = findHelper.findMenu(Integer.parseInt(entry.getKey()));
            contents.put(String.valueOf(menu.getId()), entry.getValue());
        }

        return contents;
    }

    public Map<String, Double> getTotalDeductions(Order order) throws DatabaseException {
        Map<String, Double> totalDeductions = new HashMap<>();

        for (Map.Entry<String, Integer> menuEntry : order.getContents().entrySet()) {
            Menu menu = findHelper.findMenu(Integer.parseInt(menuEntry.getKey()));
            int menuQuantity = menuEntry.getValue();

            for (Map.Entry<String, Double> ingredientEntry : menu.getIngredients().entrySet()) {
                Ingredient ingredient = findHelper.findIngredient(Integer.parseInt(ingredientEntry.getKey()));
                double ingredientQuantity = ingredientEntry.getValue();
                double ingredientDeduction = menuQuantity * ingredientQuantity;

                if (!totalDeductions.containsKey(String.valueOf(ingredient.getId()))) {
                    totalDeductions.put(
                            String.valueOf(ingredient.getId()),
                            ingredientDeduction
                    );
                } else {
                    totalDeductions.put(
                            String.valueOf(ingredient.getId()),
                            totalDeductions.get(String.valueOf(ingredient.getId())) + ingredientDeduction)
                    ;
                }
            }
        }

        return totalDeductions;
    }
}
