package com.marseeys.backend.entity.possys.payment;

import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DigitalWallet extends Cash{
    private String mobileNo;

    public DigitalWallet(int id, Order order, double amount, double change, String mobileNo) {
        super(id, order, amount, change);
        this.mobileNo = mobileNo;
    }
}
