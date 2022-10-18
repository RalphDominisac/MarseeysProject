package com.marseeys.backend.entity.possys.order;

import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Map;

@Getter
@Setter
@NoArgsConstructor
public class DineIn extends Order {
    private int tableNo;

    public DineIn(int id, String customer, Map<String, Integer> contents, double price, double discount, int tableNo) {
        super(id, customer, contents, price, discount);
        this.tableNo = tableNo;
    }
}
