package com.marseeys.backend.entity.possys.payment;

import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Credit extends Cash{
    private String cardNo;

    public Credit(int id, Order order, double amount, double change, String cardNo) {
        super(id, order, amount, change);
        this.cardNo = cardNo;
    }
}
