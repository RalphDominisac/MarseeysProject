package com.example.marpos.entity.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Payments")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Payment {
    @Id
    private int id;
    @DBRef(db = "Orders")
    private int orderId;
    private double amount;
    private double change;
}
