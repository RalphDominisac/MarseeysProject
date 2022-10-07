package com.marseeys.backend.entity.possys.order;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class Delivery extends Order {
    private String address;
    private DeliveryMethod method;

    public Delivery(int id, String customer, Map<Menu, Integer> contents, double price, String address, DeliveryMethod method) {
        super(id, customer, contents, price);
        this.address = address;
        this.method = method;
    }
}
