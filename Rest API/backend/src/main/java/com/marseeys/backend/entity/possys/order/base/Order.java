package com.marseeys.backend.entity.possys.order.base;

import com.marseeys.backend.entity.possys.menu.Menu;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

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
    @DocumentReference(collection = "Menu")
    private Map<Menu, Integer> contents;
    private double price;
    @CreatedDate
    private LocalDateTime date;
    private boolean paid;
    private boolean served;
    private boolean canceled;

    public Order(int id, String customer, Map<Menu, Integer> contents, double price) {
        this.id = id;
        this.customer = customer;
        this.contents = contents;
        this.price = price;
        this.date = LocalDateTime.now();
        this.paid = false;
        this.served = false;
        this.canceled = false;
    }
}
