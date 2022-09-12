package com.example.marpos.entity.order;

import com.example.marpos.entity.item.Item;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "Orders")
@NoArgsConstructor
public class Order {
    @Id
    private int orderId;
    private String customer;
    @DocumentReference(collection = "Menu")
    private List<Item> contents;
    private double price;
    @CreatedDate
    private LocalDateTime date;
    private boolean paid;
    private boolean served;
    private boolean canceled;

    public Order(int orderId, String customer, List<Item> contents, double price, LocalDateTime date, boolean paid, boolean served, boolean canceled) {
        this.orderId = orderId;
        this.customer = customer;
        this.contents = contents;
        this.price = price;
        this.date = date;
        this.paid = paid;
        this.served = served;
        this.canceled = canceled;
    }
}
