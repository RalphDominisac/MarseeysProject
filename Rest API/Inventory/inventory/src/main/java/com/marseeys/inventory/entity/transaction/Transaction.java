package com.marseeys.inventory.entity.transaction;

import com.marseeys.inventory.entity.ingredient.Ingredient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Data
@Document(collection = "Transaction")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Transaction {
    @Id
    private int id;
    @DocumentReference(collection = "Ingredients")
    private Ingredient ingredient;
    private double quantity;
    private boolean add;
//    @CreatedBy
//    private User user;
    @CreatedDate
    private LocalDateTime date;
}
