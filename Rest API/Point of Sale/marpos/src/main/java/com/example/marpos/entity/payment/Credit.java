package com.example.marpos.entity.payment;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class Credit extends Payment{
    private String cardNo;

    public Credit(int id, int orderId, double amount, double change, String cardNo) {
        super(id, orderId, amount, change);
        this.cardNo = cardNo;
    }
}
