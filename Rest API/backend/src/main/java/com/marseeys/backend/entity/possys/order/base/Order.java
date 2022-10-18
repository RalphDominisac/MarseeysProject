package com.marseeys.backend.entity.possys.order.base;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
@Document(collection = "Orders")
public class Order {
    @Id
    private int id;
    private String customer;
    private Map<String, Integer> contents;
    private double price;
    private double discount;
    @CreatedDate
    private LocalDateTime date;
    private boolean paid;
    private boolean served;
    private boolean canceled;

    public Order(int id, String customer, Map<String, Integer> contents, double price, double discount) {
        this.id = id;
        this.customer = customer;
        this.contents = contents;
        this.price = price;
        this.discount = discount;
        this.date = LocalDateTime.now();
        this.paid = false;
        this.served = false;
        this.canceled = false;
    }
}
