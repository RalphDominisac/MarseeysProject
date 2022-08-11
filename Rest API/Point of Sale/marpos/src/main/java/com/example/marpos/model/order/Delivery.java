package com.example.marpos.model.order;

import com.example.marpos.model.customer.Customer;
import com.example.marpos.model.MenuItem;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class Delivery extends Order{
    private String address;
    private String method;

    public Delivery(Customer customer, List<MenuItem> contents, double netAmount, double totalAmount, String address, String method) {
        super(customer, contents, netAmount, totalAmount);
        this.address = address;
        this.method = method;
    }
}
