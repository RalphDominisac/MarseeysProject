package com.example.marpos.model.customer;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document
public class Customer {
    @Id
    private String id;
    private String name;

    public Customer(String name) {
        this.name = name;
    }
}
