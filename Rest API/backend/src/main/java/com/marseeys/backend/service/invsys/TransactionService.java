package com.marseeys.backend.service.invsys;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.helper.OrderingHelper;
import com.marseeys.backend.helper.TransactionHelper;
import com.marseeys.backend.model.invsys.transaction.TransactionInRequest;
import com.marseeys.backend.model.invsys.transaction.TransactionOutRequest;
import com.marseeys.backend.repository.invsys.IngredientRepository;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import com.marseeys.backend.service.invsys.transactioninsort.SortByCategory;
import com.marseeys.backend.service.invsys.transactioninsort.SortByName;
import com.marseeys.backend.service.invsys.transactioninsort.SortByQuantity;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@AllArgsConstructor
public class TransactionService {
    private final TransactionRepository transactionRepository;
    private final IngredientRepository ingredientRepository;
    private final DatabaseHelper databaseHelper;
    private final TransactionHelper transactionHelper;
    private final FindHelper findHelper;
    private final OrderingHelper orderingHelper;

    public List<Transaction> getTransactions() {
        List<Transaction> transactions = transactionRepository.findAll();

        transactions.sort(Comparator.comparing(Transaction::getDate));

        return transactions;
    }

    public List<TransactionIn> getRelevantTransactions() {
        List<TransactionIn> stockIns = transactionRepository.findRelevantTransactions();

        stockIns.sort(Comparator.comparing(Transaction::getDate));

        return transactionRepository.findRelevantTransactions();
    }

    public List<TransactionIn> getTransactionsByName() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByName());

        return stockIns;
    }

    public List<TransactionIn> getTransactionsByCategory() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByCategory());

        return stockIns;
    }

    public List<TransactionIn> getTransactionsByQuantity() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(new SortByQuantity());

        return stockIns;
    }

    public List<TransactionIn> getTransactionsByExpiry() {
        List<TransactionIn> stockIns =  transactionRepository.findRelevantTransactions();

        stockIns.sort(Comparator.comparing(TransactionIn::getExpiryDate));

        return stockIns;
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

    public List<Transaction> saveTransactionOut(int orderId, Map<String, Integer> orderContents) throws DatabaseException, IngredientException {
        List<Transaction> orderTransaction = new ArrayList<>();
        List<Ingredient> ingredientChanges = new ArrayList<>();
        Map<Integer, Double> totalIngredients = orderingHelper.getTotalIngredients(orderContents);

        Set<Integer> ingredientIds = totalIngredients.keySet();
        List<Ingredient> availableIngredients = ingredientRepository.findIngredients(ingredientIds.stream().toList());

        if (ingredientIds.size() != availableIngredients.size()) {
            throw new IngredientException(ExceptionType.INSUFFICIENT_INGREDIENTS_EXCEPTION);
        }

        for (Ingredient ingredient : availableIngredients) {
            Double ingredientRequired = totalIngredients.get(ingredient.getId());

            if (ingredient.getQuantity() - ingredientRequired < 0) {
                throw new IngredientException(ExceptionType.INSUFFICIENT_INGREDIENTS_EXCEPTION);
            }
            ingredient.setQuantity(ingredient.getQuantity() - ingredientRequired);
            ingredientChanges.add(ingredient);

            Transaction transaction = new Transaction(
                    ingredient,
                    ingredientRequired,
                    "Order number : " + orderId
            );

            orderTransaction.add(transaction);
        }

        ingredientRepository.saveAll(ingredientChanges);
        transactionHelper.reflectTransactions(orderTransaction);
        return transactionRepository.saveAll(orderTransaction);
    }

    public Transaction deleteRelevantTransaction(String id) throws DatabaseException, IngredientException {
        TransactionIn transaction = findHelper.findTransactionIn(id);
        Ingredient ingredient = transaction.getIngredient();

        if (transaction.isDeleted()) throw new IngredientException(
                String.valueOf(id),
                ExceptionType.INGREDIENT_ALREADY_DELETED_EXCEPTION
        );

        Transaction deleteTransaction = new Transaction(
                ingredient,
                transaction.getQuantity() - transaction.getAmountUsed(),
                "Deleted by action"
        );

        ingredient.setQuantity(ingredient.getQuantity() - (transaction.getQuantity() - transaction.getAmountUsed()));
        transaction.setAmountUsed(transaction.getQuantity());
        transaction.setRelevant(!transaction.isRelevant());
        transaction.setDeleted(!transaction.isDeleted());

        ingredientRepository.save(ingredient);
        transactionRepository.save(deleteTransaction);
        return transactionRepository.save(transaction);
    }
}
