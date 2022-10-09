package com.marseeys.backend.controller.invsys;

import com.marseeys.backend.entity.invsys.ingredient.IngredientCategory;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.invsys.ingredient.IngredientCategoryRequest;
import com.marseeys.backend.service.invsys.IngredientService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/ingredient/category")
@AllArgsConstructor
public class IngredientCategoryController {
    private final IngredientService ingredientService;

    @GetMapping()
    public ResponseEntity<List<IngredientCategory>> getIngredientCategories() {
        return ResponseEntity.ok(ingredientService.getIngredientCategories());
    }

    @PostMapping("/add")
    public ResponseEntity<IngredientCategory> saveMenuCategory(@RequestBody @Valid IngredientCategoryRequest IngredientCategoryRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.saveIngredientCategory(IngredientCategoryRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteMenuCategory(@RequestBody @Valid IngredientCategoryRequest IngredientCategoryRequest) throws DatabaseException {
        ingredientService.deleteIngredientCategory(IngredientCategoryRequest);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
