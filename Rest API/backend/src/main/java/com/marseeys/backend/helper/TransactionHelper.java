package com.marseeys.backend.helper;

import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.repository.invsys.TransactionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;

@Component
@AllArgsConstructor
public class TransactionHelper {
    private final TransactionRepository transactionRepository;

    public void reflectTransaction(Transaction transaction) {
        List<TransactionIn> relevantTransactions = transactionRepository.findRelevantTransactions();
        relevantTransactions.sort(Comparator.comparing(TransactionIn::getExpiryDate));

        double toDeduct = transaction.getQuantity();
        for (int index = 0; toDeduct != 0; ) {
            TransactionIn transactionIn = relevantTransactions.get(index);

            if (!transactionIn.getIngredient().getName().equals(transaction.getIngredient().getName())) {
                index++;
                continue;
            }

            transactionIn.setAmountUsed(transactionIn.getAmountUsed() + toDeduct);
            toDeduct = 0;

            if (transactionIn.getAmountUsed() > transactionIn.getQuantity()) {
                index++;
                toDeduct += transactionIn.getAmountUsed() - transactionIn.getQuantity();

                transactionIn.setAmountUsed(transactionIn.getAmountUsed() - toDeduct);
                transactionIn.setRelevant(!transactionIn.isRelevant());
            } else if (transactionIn.getAmountUsed() == transactionIn.getQuantity()) {
                index++;

                transactionIn.setRelevant(!transactionIn.isRelevant());
            }

            transactionRepository.save(transactionIn);
        }
    }

    public void reflectTransactions(List<Transaction> transactions) {
        for (Transaction transaction : transactions) {
            reflectTransaction(transaction);
        }
    }
}
