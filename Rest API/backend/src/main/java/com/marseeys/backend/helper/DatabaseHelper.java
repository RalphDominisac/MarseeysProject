package com.marseeys.backend.helper;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.exception.DatabaseException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@AllArgsConstructor
public class DatabaseHelper {
    private final FindHelper findHelper;

    public Map<Ingredient, Integer> checkIngredientsExist(Map<Integer, Integer> ingredientIds) throws DatabaseException {
        Map<Ingredient, Integer> ingredientContents = new HashMap<>();

        for (Map.Entry<Integer, Integer> entry : ingredientIds.entrySet()) {
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
}
