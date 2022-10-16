package com.marseeys.backend.service.invsys.transactioninsort;

import com.marseeys.backend.entity.invsys.transaction.TransactionIn;

import java.util.Comparator;

public class SortByCategory implements Comparator<TransactionIn>{
    public int compare(TransactionIn a, TransactionIn b) {
        return a.getIngredient().getIngredientCategory().getName().compareTo(b.getIngredient().getIngredientCategory().getName());
    }
}
