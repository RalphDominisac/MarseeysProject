package com.example.marpos.entity.payment;

import com.example.marpos.entity.order.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class DigitalWallet extends Payment{
    private String mobileNo;

    public DigitalWallet(int id, Order order, double amount, double change, String mobileNo) {
        super(id, order, amount, change);
        this.mobileNo = mobileNo;
    }
}
