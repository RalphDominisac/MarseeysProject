package com.example.marpos.model.order;

import com.example.marpos.model.customer.Customer;
import com.example.marpos.model.MenuItem;
import com.example.marpos.model.payment.Payment;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Document
public class Order {
    @Id
    private String id;
    @DBRef
    private Customer customer;
    private double discount;
    private List<MenuItem> contents;
    private double netAmount;
    private double totalAmount;
    private LocalDateTime date;
    private boolean paid;
    private boolean served;
    private Payment paymentType;

    public Order(Customer customer, List<MenuItem> contents, double netAmount, double totalAmount) {
        this.customer = customer;
        this.discount = 0;
        this.contents = contents;
        this.netAmount = netAmount;
        this.totalAmount = totalAmount;
        this.date = LocalDateTime.now();
        this.paid = false;
        this.served = false;
    }

    // Subject for testing
    public void addMenuItem(List<MenuItem> menuItems) {
        this.contents.addAll(menuItems);
    }

    public void removeMenuItem(MenuItem menuItem) {
        this.contents.remove(menuItem);
    }
}
