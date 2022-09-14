package com.example.marpos.entity.payment;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Data
@Document(collection = "Payments")
@NoArgsConstructor
public class Payment {
    @Id
    private int id;
    @DocumentReference(collection = "Orders")
    private int orderId;
    private double amount;
    private double change;

    public Payment(int id, int orderId, double amount, double change) {
        this.id = id;
        this.orderId = orderId;
        this.amount = amount;
        this.change = change;
    }
}
