package com.marseeys.backend.service.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.invsys.transaction.TransactionRequest;
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
    private final FindHelper findHelper;

    public List<Transaction> getTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction saveTransaction(TransactionRequest transactionRequest) throws DatabaseException {
        int id = transactionRequest.getIngredient();
        Ingredient ingredient = findHelper.findIngredient(id);

        try {
            Transaction transaction = new Transaction(
                    ingredient,
                    transactionRequest.getQuantity(),
                    transactionRequest.isAdd()
            );
            if (transactionRequest.isAdd()) ingredient.setQuantity(ingredient.getQuantity() + transactionRequest.getQuantity());
            else ingredient.setQuantity(ingredient.getQuantity() - transactionRequest.getQuantity());

            ingredientRepository.save(ingredient);
            return transactionRepository.save(transaction);
        } catch(Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_TRANSACTION_EXCEPTION
            );
        }
    }

    public List<Transaction> saveTransaction(Order order) throws IngredientException, DatabaseException {
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
                    false
            );

            orderTransaction.add(transaction);
        }

        ingredientRepository.saveAll(ingredientChanges);
        return transactionRepository.saveAll(orderTransaction);
    }
}
