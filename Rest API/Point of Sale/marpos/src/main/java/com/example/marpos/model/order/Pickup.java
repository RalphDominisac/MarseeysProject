package com.example.marpos.model.order;

import com.example.marpos.model.customer.Customer;
import com.example.marpos.model.MenuItem;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
public class Pickup extends Order{
    private String contactNo;
    private LocalTime estTime;

    public Pickup(Customer customer, List<MenuItem> contents, double netAmount, double totalAmount) {
        super(customer, contents, netAmount, totalAmount);
    }
}
