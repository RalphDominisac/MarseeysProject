package com.marseeys.backend.config;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.helper.TransactionHelper;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;

import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;

@Configuration
@EnableScheduling
@AllArgsConstructor
public class AppConfig {
    private final IngredientRepository ingredientRepository;
    private final TransactionRepository transactionRepository;
    private final TransactionHelper transactionHelper;

    @Scheduled(cron = "0 0 0 * * ?", zone = "GMT+8")
    public void dailyInventoryCheck() {
        List<TransactionIn> transactions = transactionRepository.findRelevantTransactions();
        transactions.sort(Comparator.comparing(TransactionIn::getExpiryDate));

        for (TransactionIn transaction : transactions) {
            if (transaction.getExpiryDate().isBefore(LocalDate.now())) {
                double spoilage = transaction.getQuantity() - transaction.getAmountUsed();
                Ingredient ingredient = transaction.getIngredient();
                Transaction spoil = new Transaction(
                        ingredient,
                        spoilage,
                        "Amount expired: " + spoilage + ingredient.getUnitMeasure()
                );

                ingredient.setQuantity(ingredient.getQuantity() - spoilage);
                transactionHelper.reflectTransaction(spoil);

                transactionRepository.save(spoil);
                ingredientRepository.save(ingredient);
            }
        }
    }
}
