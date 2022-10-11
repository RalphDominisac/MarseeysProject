package com.marseeys.backend.controller.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.model.invsys.ingredient.EditIngredientRequest;
import com.marseeys.backend.model.invsys.ingredient.IngredientRequest;
import com.marseeys.backend.service.invsys.IngredientService;
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
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<List<Ingredient>> getIngredients() {
        return ResponseEntity.ok(ingredientService.getIngredients());
    }

    @GetMapping("/report")
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<List<Ingredient>> getNeedsRestocking() {
        return ResponseEntity.ok(ingredientService.getNeedsRestocking());
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Ingredient> saveIngredient(@RequestBody @Valid IngredientRequest ingredientRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.saveIngredient(ingredientRequest), HttpStatus.CREATED);
    }

    @PostMapping("/edit/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Ingredient> editIngredient(@PathVariable int id, @RequestBody @Valid EditIngredientRequest editIngredientRequest) throws DatabaseException {
        return new ResponseEntity<>(ingredientService.editIngredient(id, editIngredientRequest), HttpStatus.OK);
    }

    @PostMapping("/delete/{id}")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<Ingredient> deleteIngredient(@PathVariable int id) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(ingredientService.deleteIngredient(id), HttpStatus.OK);
    }
}
