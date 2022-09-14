package com.example.marpos.exception.payment;

public class OrderAlreadyPaidException extends Exception{
    public OrderAlreadyPaidException(int id) {
        super("Order 'id: " + id + "' is already paid.");
    }
}
