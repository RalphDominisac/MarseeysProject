package com.example.marpos.entity.payment;

import com.example.marpos.entity.order.Order;
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
    private Order order;
    private double amount;
    private double change;

    public Payment(int id, Order order, double amount, double change) {
        this.id = id;
        this.order = order;
        this.amount = amount;
        this.change = change;
    }
}
