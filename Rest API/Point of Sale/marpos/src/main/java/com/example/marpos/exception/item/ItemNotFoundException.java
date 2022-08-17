package com.example.marpos.exception.item;

public class ItemNotFoundException extends Exception{
    public ItemNotFoundException(int id) {
        super("ID not found in database: " + id);
    }
}
