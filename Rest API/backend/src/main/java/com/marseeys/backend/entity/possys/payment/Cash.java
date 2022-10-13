package com.marseeys.backend.entity.possys.payment;

import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;

@Getter
@Setter
@Document(collection = "Payments")
@NoArgsConstructor
public class Cash {
    @Id
    private int id;
    @DocumentReference(collection = "Orders")
    private Order order;
    private double amount;
    private double change;
    @CreatedDate
    private LocalDateTime date;

    public Cash(int id, Order order, double amount, double change) {
        this.id = id;
        this.order = order;
        this.amount = amount;
        this.change = change;
        this.date = LocalDateTime.now();
    }
}
