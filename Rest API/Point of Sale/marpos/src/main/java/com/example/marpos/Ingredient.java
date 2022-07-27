package com.example.marpos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document
public class Ingredient {
    @Id
    private String id;
    private String name;
    private double quantity;
    private Quantification unit;

    public Ingredient(String name, double quantity, Quantification unit) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
    }
}