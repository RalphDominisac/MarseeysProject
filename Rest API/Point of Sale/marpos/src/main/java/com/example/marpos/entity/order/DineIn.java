package com.example.marpos.entity.order;

import com.example.marpos.entity.item.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DineIn extends Order{
    private int tableNo;

    public DineIn(int orderId, String customer, List<Item> contents, double price, LocalDateTime date, boolean paid, boolean served, boolean canceled, int tableNo) {
        super(orderId, customer, contents, price, date, paid, served, canceled);
        this.tableNo = tableNo;
    }
}
