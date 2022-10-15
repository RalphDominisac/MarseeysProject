package com.marseeys.backend.service.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.ingredient.IngredientCategory;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.invsys.ingredient.EditIngredientRequest;
import com.marseeys.backend.model.invsys.ingredient.IngredientCategoryRequest;
import com.marseeys.backend.model.invsys.ingredient.IngredientRequest;
import com.marseeys.backend.repository.invsys.IngredientCategoryRepository;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.service.invsys.ingredientsort.SortByCategory;
import com.marseeys.backend.service.invsys.ingredientsort.SortByExpiry;
import com.marseeys.backend.service.invsys.ingredientsort.SortByName;
import com.marseeys.backend.service.invsys.ingredientsort.SortByQuantity;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
@AllArgsConstructor
public class IngredientService {
    private final NextSequenceService nextSequenceService;
    private final IngredientRepository ingredientRepository;
    private final TransactionRepository transactionRepository;
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

    public List<TransactionIn> getIngredients() {
        return transactionRepository.findRelevantTransactions();
    }

    public List<TransactionIn> getIngredientsByName() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByName());

        return stockIns;
    }

    public List<TransactionIn> getIngredientsByCategory() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByCategory());

        return stockIns;
    }

    public List<TransactionIn> getIngredientsByQuantity() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByQuantity());

        return stockIns;
    }

    public List<TransactionIn> getIngredientsByExpiry() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByExpiry());

        return stockIns;
    }

    public List<Ingredient> getNeedsRestocking(){
        List<Ingredient> needsRestocking = new ArrayList<>();

        for (Ingredient ingredient : ingredientRepository.viewIngredients()) {
            if (ingredient.getQuantity() <= ingredient.getThreshold()) {
                needsRestocking.add(ingredient);
            }
        }

        return needsRestocking;
    }

    public Ingredient saveIngredient(IngredientRequest ingredientRequest) throws DatabaseException {
        IngredientCategory ingredientCategory = findHelper.findIngredientCategory(ingredientRequest.getIngredientCategory());

        try {
            Ingredient ingredient = new Ingredient(
                    nextSequenceService.getNextSequence("IngredientSequence"),
                    ingredientRequest.getName(),
                    ingredientCategory,
                    ingredientRequest.getUnitMeasure(),
                    ingredientRequest.getThreshold()
            );
            return ingredientRepository.save(ingredient);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_INGREDIENT_EXCEPTION
            );
        }
    }

    public Transaction editIngredient(String id, EditIngredientRequest editIngredientRequest) throws DatabaseException {
        TransactionIn transaction = findHelper.findTransaction(id);
        Ingredient ingredient = transaction.getIngredient();

        ingredient.setName(editIngredientRequest.getName());
        ingredient.setIngredientCategory(findHelper.findIngredientCategory(editIngredientRequest.getIngredientCategory()));
        ingredient.setThreshold(editIngredientRequest.getThreshold());
        ingredient.setUnitMeasure(editIngredientRequest.getUnitMeasure());
        transaction.setExpiryDate(editIngredientRequest.getExpiryDate());

        ingredientRepository.save(ingredient);
        return transactionRepository.save(transaction);
    }

    public Transaction deleteIngredient(String id) throws DatabaseException, IngredientException {
        TransactionIn transaction = findHelper.findTransaction(id);
        Ingredient ingredient = transaction.getIngredient();

        if (transaction.isDeleted()) throw new IngredientException(
                String.valueOf(id),
                ExceptionType.INGREDIENT_ALREADY_DELETED_EXCEPTION
        );

        transaction.setDeleted(!transaction.isDeleted());
        transaction.setRelevant(!transaction.isRelevant());
        ingredient.setQuantity(ingredient.getQuantity() - (transaction.getQuantity() - transaction.getAmountUsed()));

        ingredientRepository.save(ingredient);
        return transactionRepository.save(transaction);
    }
}
