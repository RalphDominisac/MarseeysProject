package com.example.marpos.controller;

import com.example.marpos.model.Ingredient;
import com.example.marpos.service.IngredientService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/ingredients")  // Port 8080
@AllArgsConstructor
// REST API for Ingredient
public class IngredientController {
    private final IngredientService ingredientService;

    @GetMapping
    public List<Ingredient> fetchAllIngredient() { return ingredientService.getAllItems(); }

    @PostMapping
    public void createIngredient(@RequestBody Ingredient ingredient) {
        ingredientService.createIngredient(ingredient);
    }

    @PostMapping
    public void updateIngredient(@RequestBody Ingredient ingredient) {
        ingredientService.updateIngredient(ingredient);
    }

    @PostMapping
    public void deleteIngredient(@RequestBody Ingredient ingredient) {
        ingredientService.deleteIngredient(ingredient);
    }
}
