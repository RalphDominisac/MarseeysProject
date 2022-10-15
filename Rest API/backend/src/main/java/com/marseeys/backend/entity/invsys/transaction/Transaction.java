package com.marseeys.backend.entity.invsys.transaction;

import com.marseeys.backend.entity.invsys.ingredient.Ingredient;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collection = "Transactions")
public class Transaction{
    @Id
    private String id;
    @DocumentReference(collection = "Ingredients")
    private Ingredient ingredient;
    private double quantity;
    private String remarks;
//    @CreatedBy
//    private User user;
    @CreatedDate
    private LocalDateTime date;
    private boolean relevant;
    private boolean deleted;

    public Transaction(Ingredient ingredient, double quantity, String remarks) {
        this.ingredient = ingredient;
        this.quantity = quantity;
        this.remarks = remarks;
        this.date = LocalDateTime.now();
        this.relevant = true;
        this.deleted = false;
    }
}
