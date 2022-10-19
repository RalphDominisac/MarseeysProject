package com.marseeys.backend.helper;

import com.marseeys.backend.config.StoreMenu;
import com.marseeys.backend.entity.possys.menu.Menu;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@AllArgsConstructor
public class OrderingHelper {
    private final StoreMenu storeMenu;

    public Map<Integer, Double> getTotalIngredients(Map<String, Integer> dishes) {
        Map<Integer, Double> totalIngredients = new HashMap<>();
        storeMenu.getAvailableMenu().forEach((name, menu) -> {
            System.out.println(name + ": " + menu);
        });

        for (Map.Entry<String, Integer> menuEntry : dishes.entrySet()) {
            Menu menu = storeMenu.getAvailableMenu().get(menuEntry.getKey());
            int menuQuantity = menuEntry.getValue();

            for (Map.Entry<String, Double> ingredientEntry : menu.getIngredients().entrySet()) {
                double ingredientQuantity = ingredientEntry.getValue();
                double ingredientsRequired = menuQuantity * ingredientQuantity;

                if (!totalIngredients.containsKey(ingredientEntry.getKey())) {
                    totalIngredients.put(
                            Integer.parseInt(ingredientEntry.getKey()),
                            ingredientsRequired
                    );
                } else {
                    totalIngredients.put(
                            Integer.parseInt(ingredientEntry.getKey()),
                            totalIngredients.get(ingredientEntry.getKey()) + ingredientsRequired)
                    ;
                }
            }
        }

        return totalIngredients;
    }
}
