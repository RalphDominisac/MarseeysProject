package com.marseeys.backend.service.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.invsys.transaction.TransactionRequest;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@AllArgsConstructor
public class TransactionService {
    private final NextSequenceService nextSequenceService;
    private final TransactionRepository transactionRepository;
    private final IngredientRepository ingredientRepository;
    private final FindHelper findHelper;

    public List<Transaction> getTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction saveTransaction(TransactionRequest transactionRequest) throws DatabaseException {
        int id = transactionRequest.getIngredient();
        Ingredient ingredient = findHelper.findIngredient(id);

        try {
            Transaction transaction = new Transaction(
                    nextSequenceService.getNextSequence("TransactionSequence"),
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

    public List<Transaction> saveTransaction(Order order) throws DatabaseException {
        List<Transaction> orderTransaction = new ArrayList<>();

        for (Map.Entry<Menu, Integer> content : order.getContents().entrySet()) {
            Map<Ingredient, Integer> ingredients = content.getKey().getIngredients();

            for (Map.Entry<Ingredient, Integer> entry : ingredients.entrySet()) {
                Ingredient ingredient = entry.getKey();
                int quantity = entry.getValue();

                try {
                    Transaction transaction = new Transaction(
                            nextSequenceService.getNextSequence("TransactionSequence"),
                            ingredient,
                            quantity,
                            false
                    );
                    ingredient.setQuantity(ingredient.getQuantity() - quantity);

                    ingredientRepository.save(ingredient);
                    orderTransaction.add(transaction);
                } catch (Exception ex) {
                    throw new DatabaseException(
                            ex,
                            ExceptionType.SAVE_TRANSACTION_EXCEPTION
                    );
                }
            }
        }

        return transactionRepository.saveAll(orderTransaction);
    }
}
