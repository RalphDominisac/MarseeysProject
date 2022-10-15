package com.marseeys.backend.service.invsys.ingredientsort;

import com.marseeys.backend.entity.invsys.transaction.TransactionIn;

import java.util.Comparator;

public class SortByExpiry implements Comparator<TransactionIn> {
    public int compare(TransactionIn a, TransactionIn b) {
        return a.getExpiryDate().compareTo(b.getExpiryDate());
    }
}
