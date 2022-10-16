package com.marseeys.backend.service.invsys.transactioninsort;

import com.marseeys.backend.entity.invsys.transaction.TransactionIn;

import java.util.Comparator;

public class SortByQuantity implements Comparator<TransactionIn> {
    public int compare(TransactionIn a, TransactionIn b) {
        return Double.compare(b.getIngredient().getQuantity(), a.getIngredient().getQuantity());
    }
}
