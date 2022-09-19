package com.example.marpos.entity.order;

import com.example.marpos.entity.item.Item;
import com.example.marpos.types.DeliveryMethod;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Delivery extends Order{
    private String address;
    private DeliveryMethod method;

    public Delivery(int orderId, String customer, List<Item> contents, double price, LocalDateTime date, boolean paid, boolean served, boolean canceled, String address, DeliveryMethod deliveryMethod) {
        super(orderId, customer, contents, price, date, paid, served, canceled);
        this.address = address;
        this.method = deliveryMethod;
    }
}
