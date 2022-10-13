package com.marseeys.backend.entity.invsys.transaction;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@Document(collection = "Transactions")
public class TransactionIn extends Transaction{
    private LocalDate expiryDate;
    private double amountUsed;

    public TransactionIn(Ingredient ingredient, double quantity, String remarks, LocalDate expiryDate) {
        super(ingredient, quantity, remarks);
        this.expiryDate = expiryDate;
        this.amountUsed = 0;
    }
}
