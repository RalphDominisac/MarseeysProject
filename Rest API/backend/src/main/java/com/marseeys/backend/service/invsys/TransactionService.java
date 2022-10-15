package com.marseeys.backend.service.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.helper.TransactionHelper;
import com.marseeys.backend.model.invsys.transaction.TransactionInRequest;
import com.marseeys.backend.model.invsys.transaction.TransactionOutRequest;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final IngredientRepository ingredientRepository;
    private final DatabaseHelper databaseHelper;
    private final TransactionHelper transactionHelper;
    private final FindHelper findHelper;

    public List<Transaction> getTransactions() {
        return transactionRepository.findTransactions();
    }

    public TransactionIn saveTransactionIn(TransactionInRequest transactionInRequest) throws DatabaseException {
        int id = transactionInRequest.getIngredient();
        Ingredient ingredient = findHelper.findIngredient(id);

        try {
            TransactionIn transaction = new TransactionIn(
                    ingredient,
                    transactionInRequest.getQuantity(),
                    transactionInRequest.getRemarks(),
                    transactionInRequest.getExpiryDate()
            );
            ingredient.setQuantity(ingredient.getQuantity() + transactionInRequest.getQuantity());

            ingredientRepository.save(ingredient);
            return transactionRepository.save(transaction);
        } catch(Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_TRANSACTION_EXCEPTION
            );
        }
    }

    public Transaction saveTransactionOut(TransactionOutRequest transactionOutRequest) throws DatabaseException, IngredientException {
        int id = transactionOutRequest.getIngredient();
        Ingredient ingredient = findHelper.findIngredient(id);

        if (ingredient.getQuantity() - transactionOutRequest.getQuantity() < 0) {
            throw new IngredientException(
                    ExceptionType.INSUFFICIENT_INGREDIENTS_EXCEPTION
            );
        }

        Transaction transaction = new Transaction(
                ingredient,
                transactionOutRequest.getQuantity(),
                transactionOutRequest.getRemarks()
        );

        try {
            ingredient.setQuantity(ingredient.getQuantity() - transactionOutRequest.getQuantity());
            transactionHelper.reflectTransaction(transaction);

            ingredientRepository.save(ingredient);
            return transactionRepository.save(transaction);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_TRANSACTION_EXCEPTION
            );
        }
    }

    public List<Transaction> saveTransactionOut(Order order) throws IngredientException, DatabaseException {
        List<Transaction> orderTransaction = new ArrayList<>();
        List<Ingredient> ingredientChanges = new ArrayList<>();
        Map<String, Double> totalDeductions = databaseHelper.getTotalDeductions(order);

        for (Map.Entry<String, Double> entry : totalDeductions.entrySet()) {
            Ingredient ingredient = findHelper.findIngredient(Integer.parseInt(entry.getKey()));
            double deduction = entry.getValue();

            if (ingredient.getQuantity() - deduction < 0) {
                throw new IngredientException(ExceptionType.INSUFFICIENT_INGREDIENTS_EXCEPTION);
            }
            ingredient.setQuantity(ingredient.getQuantity() - deduction);
            ingredientChanges.add(ingredient);

            Transaction transaction = new Transaction(
                    ingredient,
                    deduction,
                    "Order number: " + order.getId()
            );

            orderTransaction.add(transaction);
        }

        ingredientRepository.saveAll(ingredientChanges);
        transactionHelper.reflectTransactions(orderTransaction);
        return transactionRepository.saveAll(orderTransaction);
    }

    public List<Transaction> saveTransactionOut(int id, Map<String, Integer> additionalContents) throws DatabaseException, IngredientException {
        List<Transaction> orderTransaction = new ArrayList<>();
        List<Ingredient> ingredientChanges = new ArrayList<>();
        Map<String, Double> totalDeductions = databaseHelper.getTotalDeductions(additionalContents);

        for (Map.Entry<String, Double> entry : totalDeductions.entrySet()) {
            Ingredient ingredient = findHelper.findIngredient(Integer.parseInt(entry.getKey()));
            double deduction = entry.getValue();

            if (ingredient.getQuantity() - deduction < 0) {
                throw new IngredientException(ExceptionType.INSUFFICIENT_INGREDIENTS_EXCEPTION);
            }
            ingredient.setQuantity(ingredient.getQuantity() - deduction);
            ingredientChanges.add(ingredient);

            Transaction transaction = new Transaction(
                    ingredient,
                    deduction,
                    "Additional items for order number: " + id
            );

            orderTransaction.add(transaction);
        }

        ingredientRepository.saveAll(ingredientChanges);
        transactionHelper.reflectTransactions(orderTransaction);
        return transactionRepository.saveAll(orderTransaction);
    }
}
