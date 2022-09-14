package com.example.marpos.exception.payment;

public class InsufficientAmountException extends Exception{
    public InsufficientAmountException() {
        super("Insufficient amount paid.");
    }
}
