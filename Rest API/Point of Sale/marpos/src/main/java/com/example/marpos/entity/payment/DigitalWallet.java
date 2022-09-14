package com.example.marpos.entity.payment;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class DigitalWallet extends Payment{
    private String mobileNo;

    public DigitalWallet(int id, int orderId, double amount, double change, String mobileNo) {
        super(id, orderId, amount, change);
        this.mobileNo = mobileNo;
    }
}
