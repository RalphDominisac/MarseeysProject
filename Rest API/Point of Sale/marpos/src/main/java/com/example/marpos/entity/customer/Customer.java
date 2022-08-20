package com.example.marpos.entity.customer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Customers")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Customer {
    @Id
    private int id;
    private String name;
}
