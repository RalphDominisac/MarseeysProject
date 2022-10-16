package com.marseeys.backend.service.invsys.ingredientsort;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;

import java.util.Comparator;

public class SortByName implements Comparator<Ingredient> {
    public int compare(Ingredient a, Ingredient b) {
        return a.getName().compareTo(b.getName());
    }
}
