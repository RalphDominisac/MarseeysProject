package com.example.marpos.model.payment;

@SuppressWarnings("FieldCanBeLocal")
public class Credit extends Payment{
    final private String cardNumber;

    public Credit(double amount, String cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }
}
