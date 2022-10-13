package com.marseeys.backend.controller.invsys;

import com.marseeys.backend.entity.invsys.ingredient.IngredientCategory;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.invsys.ingredient.IngredientCategoryRequest;
import com.marseeys.backend.service.invsys.IngredientService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the categories for the ingredients.",
            notes = "",
            response = IngredientCategory.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<IngredientCategory>> getIngredientCategories() {
        return ResponseEntity.ok(ingredientService.getIngredientCategories());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Adds a category to the registered list of categories.",
            notes = "",
            response = IngredientCategory.class
    )
    public ResponseEntity<IngredientCategory> saveIngredientCategory(@RequestBody @Valid IngredientCategoryRequest IngredientCategoryRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.saveIngredientCategory(IngredientCategoryRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Deletes a registered ingredient category from the database.",
            notes = "",
            response = String.class
    )
    public ResponseEntity<String> deleteIngredientCategory(@RequestBody @Valid IngredientCategoryRequest IngredientCategoryRequest) throws DatabaseException {
        ingredientService.deleteIngredientCategory(IngredientCategoryRequest);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
