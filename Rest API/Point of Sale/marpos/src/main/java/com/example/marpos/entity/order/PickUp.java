package com.example.marpos.entity.order;

import com.example.marpos.entity.item.Item;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PickUp extends Order{
    private String phoneNo;
    private int estimatedTime;

    public PickUp(int orderId, String customer, List<Item> contents, double price, LocalDateTime date, boolean paid, boolean served, boolean canceled, String phoneNo, LocalTime estimatedTime) {
        super(orderId, customer, contents, price, date, paid, served, canceled);
        this.phoneNo = phoneNo;
        this.estimatedTime = estimatedTime.getMinute();
    }
}
