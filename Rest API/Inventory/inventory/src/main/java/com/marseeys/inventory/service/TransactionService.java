package com.marseeys.inventory.service;

import com.marseeys.inventory.entity.ingredient.Ingredient;
import com.marseeys.inventory.entity.transaction.Transaction;
import com.marseeys.inventory.exception.DatabaseException;
import com.marseeys.inventory.model.transaction.TransactionRequest;
import com.marseeys.inventory.repository.IngredientRepository;
import com.marseeys.inventory.repository.TransactionRepository;
import com.marseeys.inventory.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Service
public class TransactionService {
    private final NextSequenceService nextSequenceService;
    private final TransactionRepository transactionRepository;
    private final IngredientRepository ingredientRepository;

    /**
     * View all Transaction documents
     * @return List of Transactions
     */
    public List<Transaction> getTransactions() {
        return transactionRepository.findAll();
    }

    /**
     * Creates a Transaction document
     * @param transactionRequest Integer, Double, boolean
     * @return Created Transaction
     * @throws DatabaseException 40002L
     */
    public Transaction saveTransaction(TransactionRequest transactionRequest) throws DatabaseException {
        int id = transactionRequest.getIngredient();
        Ingredient ingredient = ingredientRepository.findById(id)
                .orElseThrow(() -> new DatabaseException(
                            String.valueOf(id),
                            ExceptionType.INGREDIENT_NOT_FOUND_EXCEPTION
                    )
                );

        try {
            Transaction transaction = Transaction.build(
                    nextSequenceService.getNextSequence("TransactionSequence"),
                    ingredient,
                    transactionRequest.getQuantity(),
                    transactionRequest.isAdd(),
                    LocalDateTime.now()
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
}
