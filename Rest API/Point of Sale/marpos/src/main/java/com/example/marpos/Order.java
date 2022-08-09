package com.example.marpos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Collection;

@Data
@Document
public class Order {
    @Id
    private String id;
    @DBRef
    private Collection<Customer> customer;

}
