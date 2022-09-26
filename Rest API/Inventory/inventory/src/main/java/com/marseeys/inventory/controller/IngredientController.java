package com.marseeys.inventory.controller;

import com.marseeys.inventory.entity.ingredient.Ingredient;
import com.marseeys.inventory.exception.DatabaseException;
import com.marseeys.inventory.model.ingredient.EditIngredientRequest;
import com.marseeys.inventory.model.ingredient.IngredientRequest;
import com.marseeys.inventory.service.IngredientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/ingredient")    // Port 8080
@AllArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @GetMapping("/")
    public ResponseEntity<List<Ingredient>> getIngredients() {
        return ResponseEntity.ok(ingredientService.getIngredients());
    }

    @GetMapping("/report")
    public ResponseEntity<String> getReport() {
        return ResponseEntity.ok(ingredientService.getReport());
    }

    @PostMapping("/add")
    public ResponseEntity<Ingredient> saveIngredient(@RequestBody @Valid IngredientRequest ingredientRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.saveIngredient(ingredientRequest), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
    public ResponseEntity<Ingredient> editIngredient(@PathVariable int id, @RequestBody @Valid EditIngredientRequest editIngredientRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.editIngredient(id, editIngredientRequest), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    public ResponseEntity<Ingredient> deleteIngredient(@PathVariable int id) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.deleteIngredient(id), HttpStatus.OK);
    }
}
