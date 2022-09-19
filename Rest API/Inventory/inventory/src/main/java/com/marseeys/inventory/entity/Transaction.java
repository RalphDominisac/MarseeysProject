package com.marseeys.inventory.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Data
@Document(collection = "Transactions")
@AllArgsConstructor(staticName = "create")
@NoArgsConstructor
public class Transaction {
    private int id;
    @DocumentReference
    private Ingredient ingredient;
    @CreatedDate
    private LocalDateTime created;
    private boolean adding;
    private int quantity;
}
