package com.marseeys.backend.service.invsys.ingredientsort;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;

import java.util.Comparator;

public class SortByQuantity implements Comparator<Ingredient> {
    public int compare(Ingredient a, Ingredient b) {
        return Double.compare(b.getQuantity(), a.getQuantity());
    }
}
