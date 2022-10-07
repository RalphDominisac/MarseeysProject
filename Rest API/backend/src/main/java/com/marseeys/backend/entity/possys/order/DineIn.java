package com.marseeys.backend.entity.possys.order;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class DineIn extends Order {
    private int tableNo;

    public DineIn(int id, String customer, List<Menu> contents, double price, int tableNo) {
        super(id, customer, contents, price);
        this.tableNo = tableNo;
    }
}
