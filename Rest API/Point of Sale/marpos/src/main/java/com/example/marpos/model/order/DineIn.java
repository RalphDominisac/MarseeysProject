package com.example.marpos.model.order;

import com.example.marpos.model.customer.Customer;
import com.example.marpos.model.MenuItem;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class DineIn extends Order{
    private int tableNo;

    public DineIn(Customer customer, List<MenuItem> contents, double netAmount, double totalAmount, int tableNo) {
        super(customer, contents, netAmount, totalAmount);
        this.tableNo = tableNo;
    }
}
