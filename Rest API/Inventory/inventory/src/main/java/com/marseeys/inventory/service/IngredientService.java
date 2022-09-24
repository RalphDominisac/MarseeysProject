package com.marseeys.inventory.service;

import com.marseeys.inventory.email.EmailSender;
import com.marseeys.inventory.entity.email.EmailDetails;
import com.marseeys.inventory.entity.ingredient.Ingredient;
import com.marseeys.inventory.exception.DatabaseException;
import com.marseeys.inventory.model.ingredient.EditIngredientRequest;
import com.marseeys.inventory.model.ingredient.IngredientRequest;
import com.marseeys.inventory.repository.IngredientRepository;
import com.marseeys.inventory.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Service
public class IngredientService {
    private final NextSequenceService nextSequenceService;
    private final IngredientRepository ingredientRepository;
    private final EmailSender emailSender;

    /**
     * View all stored Ingredient documents
     * @return List of Ingredients
     */
    public List<Ingredient> getIngredients() {
        return ingredientRepository.viewAll();
    }

    /**
     * Emails the inventory report to a set of fixed recipients
     * @return Success message
     */
    public String getReport() {
        StringBuffer msgBody = new StringBuffer();
        List<String> recipients = List.of(
                "sbcleonar@addu.edu.ph"
        );

        for (Ingredient ingredient : ingredientRepository.viewAll()) {
            if (ingredient.getQuantity() < ingredient.getThreshold()) {
                msgBody.append(ingredient.getId()).append(" - ")
                        .append(ingredient.getName()).append(": ")
                        .append("<font style='color:red;'>")
                        .append(ingredient.getQuantity()).append(" ")
                        .append(ingredient.getUnitMeasure())
                        .append("</font>").append("<br>");
            } else {
                msgBody.append(ingredient.getId()).append(" - ")
                        .append(ingredient.getName()).append(": ")
                        .append(ingredient.getQuantity()).append(" ")
                        .append(ingredient.getUnitMeasure()).append("<br>");
            }
        }

        emailSender.sendEmail(EmailDetails.build(
                "Inventory Report",
                msgBody.toString(),
                recipients
        ));

        return "Success!";
    }

    /**
     * Creates a new Ingredient document in the Ingredients collection.
     * @param ingredientRequest String, String, IngredientCategory, UnitMeasure, Integer, Integer
     * @return Created Ingredient
     * @throws DatabaseException 40001L
     */
    public Ingredient saveIngredient(IngredientRequest ingredientRequest) throws DatabaseException {
        try {
            Ingredient ingredient = Ingredient.build(
                    nextSequenceService.getNextSequence("IngredientSequence"),
                    ingredientRequest.getName(),
                    ingredientRequest.getDescription(),
                    ingredientRequest.getIngredientCategory(),
                    ingredientRequest.getUnitMeasure(),
                    ingredientRequest.getQuantity(),
                    ingredientRequest.getThreshold(),
                    false,
                    ingredientRequest.getExpiryDate(),
                    LocalDateTime.now()
            );
            return ingredientRepository.save(ingredient);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_INGREDIENT_EXCEPTION
            );
        }
    }

    /**
     * Edits the Ingredient with the specified ID
     * @param id Integer
     * @param editIngredientRequest String, String, IngredientCategory, UnitMeasure, Integer, LocalDateTime
     * @return Edited Ingredient
     * @throws DatabaseException 40002L
     */
    public Ingredient editIngredient(int id, EditIngredientRequest editIngredientRequest) throws DatabaseException {
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                    String.valueOf(id),
                    ExceptionType.INGREDIENT_NOT_FOUND_EXCEPTION
                ));

        ingredient.setName(editIngredientRequest.getName());
        ingredient.setDescription(editIngredientRequest.getDescription());
        ingredient.setIngredientCategory(editIngredientRequest.getIngredientCategory());
        ingredient.setUnitMeasure(editIngredientRequest.getUnitMeasure());
        ingredient.setThreshold(editIngredientRequest.getThreshold());
        ingredient.setExpiryDate(editIngredientRequest.getExpiryDate());

        return ingredientRepository.save(ingredient);
    }

    /**
     * Deletes an item with the specified ID
     * @param id Integer
     * @return Deleted Ingredient
     * @throws DatabaseException 40002L, 40003L
     */
    public Ingredient deleteIngredient(int id) throws DatabaseException {
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                        String.valueOf(id),
                        ExceptionType.INGREDIENT_NOT_FOUND_EXCEPTION
                ));

        if (ingredient.isDeleted()) throw new DatabaseException(
                String.valueOf(id),
                ExceptionType.INGREDIENT_ALREADY_DELETED_EXCEPTION
        );

        ingredient.setDeleted(true);

        return ingredientRepository.save(ingredient);
    }
}
