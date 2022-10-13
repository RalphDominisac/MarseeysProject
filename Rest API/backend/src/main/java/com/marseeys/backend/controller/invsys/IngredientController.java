package com.marseeys.backend.controller.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.model.invsys.ingredient.EditIngredientRequest;
import com.marseeys.backend.model.invsys.ingredient.IngredientRequest;
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
@RequestMapping("/api/v1/ingredient")
@AllArgsConstructor
public class IngredientController {
    private final IngredientService ingredientService;

    @GetMapping()
////    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the ingredient items.",
            notes = "",
            response = Ingredient.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<Ingredient>> getIngredients() {
        return ResponseEntity.ok(ingredientService.getIngredients());
    }

    @GetMapping("/report")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the ingredient items that have quantities less " +
                    "than or equal to the set threshold.",
            notes = "",
            response = Ingredient.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<Ingredient>> getNeedsRestocking() {
        return ResponseEntity.ok(ingredientService.getNeedsRestocking());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Adds an ingredient based on the given object.",
            notes = "Unit measures are listed as constants under the 'types' folder " +
                    "and is case sensitive. Make sure to input units in all caps.",
            response = Ingredient.class
    )
    public ResponseEntity<Ingredient> saveIngredient(@RequestBody @Valid IngredientRequest ingredientRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.saveIngredient(ingredientRequest), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Edits the ingredient with the specified id.",
            notes = "",
            response = Ingredient.class
    )
    public ResponseEntity<Ingredient> editIngredient(@PathVariable int id, @RequestBody @Valid EditIngredientRequest editIngredientRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.editIngredient(id, editIngredientRequest), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Marks the specified ingredient as deleted.",
            notes = "",
            response = Ingredient.class
    )
    public ResponseEntity<Ingredient> deleteIngredient(@PathVariable int id) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(ingredientService.deleteIngredient(id), HttpStatus.OK);
    }
}
