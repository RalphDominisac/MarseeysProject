package com.marseeys.backend.service.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.ingredient.IngredientCategory;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.invsys.ingredient.EditIngredientRequest;
import com.marseeys.backend.model.invsys.ingredient.IngredientCategoryRequest;
import com.marseeys.backend.model.invsys.ingredient.IngredientRequest;
import com.marseeys.backend.repository.invsys.IngredientCategoryRepository;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class IngredientService {
    private final NextSequenceService nextSequenceService;
    private final IngredientRepository ingredientRepository;
    private final IngredientCategoryRepository ingredientCategoryRepository;
    private final FindHelper findHelper;

    public IngredientCategory saveIngredientCategory(IngredientCategoryRequest ingredientCategoryRequest) throws DatabaseException {
        try {
            IngredientCategory ingredientCategory = new IngredientCategory(
                    nextSequenceService.getNextSequence("IngredientCategorySequence"),
                    ingredientCategoryRequest.getName()
            );

            return ingredientCategoryRepository.save(ingredientCategory);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_INGREDIENT_CATEGORY_EXCEPTION
            );
        }
    }

    public List<IngredientCategory> getIngredientCategories() {
        return ingredientCategoryRepository.findAll();
    }

    public void deleteIngredientCategory(IngredientCategoryRequest ingredientCategoryRequest) throws DatabaseException {
        IngredientCategory ingredientCategory = findHelper.findIngredientCategory(ingredientCategoryRequest.getName());

        ingredientCategoryRepository.delete(ingredientCategory);
    }

    public List<Ingredient> getIngredients() {
        return ingredientRepository.viewIngredients();
    }

    public Ingredient saveIngredient(IngredientRequest ingredientRequest) throws DatabaseException {
        IngredientCategory ingredientCategory = findHelper.findIngredientCategory(ingredientRequest.getIngredientCategory());

        try {
            Ingredient ingredient = new Ingredient(
                    nextSequenceService.getNextSequence("IngredientSequence"),
                    ingredientRequest.getName(),
                    ingredientCategory,
                    ingredientRequest.getUnitMeasure(),
                    ingredientRequest.getQuantity(),
                    ingredientRequest.getThreshold(),
                    ingredientRequest.getExpiryDate()
            );
            return ingredientRepository.save(ingredient);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_INGREDIENT_EXCEPTION
            );
        }
    }

    public Ingredient editIngredient(int id, EditIngredientRequest editIngredientRequest) throws DatabaseException {
        Ingredient ingredient = findHelper.findIngredient(id);

        ingredient.setName(editIngredientRequest.getName());
        ingredient.setIngredientCategory(findHelper.findIngredientCategory(editIngredientRequest.getIngredientCategory()));
        ingredient.setUnitMeasure(editIngredientRequest.getUnitMeasure());
        ingredient.setThreshold(editIngredientRequest.getThreshold());
        ingredient.setExpiryDate(editIngredientRequest.getExpiryDate());

        return ingredientRepository.save(ingredient);
    }

    public Ingredient deleteIngredient(int id) throws DatabaseException, IngredientException {
        Ingredient ingredient = findHelper.findIngredient(id);

        if (ingredient.isDeleted()) throw new IngredientException(
                String.valueOf(id),
                ExceptionType.INGREDIENT_ALREADY_DELETED_EXCEPTION
        );

        ingredient.setDeleted(true);

        return ingredientRepository.save(ingredient);
    }
}
