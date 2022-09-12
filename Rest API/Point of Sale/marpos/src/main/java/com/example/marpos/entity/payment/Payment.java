package com.example.marpos.entity.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Data
@Document(collection = "Payments")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Payment {
    @Id
    private int id;
    @DocumentReference(collection = "Orders")
    private int orderId;
    private double amount;
    private double change;
}
