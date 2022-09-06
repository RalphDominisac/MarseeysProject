package com.example.marpos.exception.order;

public class OrderNotFoundException extends Exception{
    public OrderNotFoundException(int id) {
        super("ID not found in database: " + id);
    }
}
