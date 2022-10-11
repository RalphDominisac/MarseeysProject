package com.marseeys.backend.config;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.*;

@Component
@AllArgsConstructor
public class ApplicationStartup implements ApplicationListener<ContextRefreshedEvent> {
    private final IngredientRepository ingredientRepository;
    private final TransactionRepository transactionRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        List<Ingredient> ingredients = ingredientRepository.findAll();
        List<TransactionIn> transactions = transactionRepository.findRelevantTransactions();
        Collections.sort(transactions, Comparator.comparing(transactionIn -> transactionIn.getExpiryDate()));

        for (TransactionIn transaction : transactions) {
            if (transaction.getExpiryDate().isAfter(LocalDate.now())) {
                double spoilage = transaction.getQuantity() - transaction.getAmountUsed();
                Ingredient ingredient = transaction.getIngredient();
                Transaction spoil = new Transaction(
                        ingredient,
                        spoilage,
                        "Amount expired: " + spoilage + ingredient.getUnitMeasure()
                );
                
                ingredient.setQuantity(ingredient.getQuantity() - spoilage);

                transactionRepository.save(spoil);
                ingredientRepository.save(ingredient);
            }
        }
    }
}
