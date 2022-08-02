package com.example.marpos;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
// Service layer of the Ingredient class
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    public List<Ingredient> getAllItems() {
        return ingredientRepository.findAll();
    }

    public void createIngredient(Ingredient ingredient) {
        ingredientRepository.insert(ingredient);
    }

    public void updateIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    public void deleteIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }
}
