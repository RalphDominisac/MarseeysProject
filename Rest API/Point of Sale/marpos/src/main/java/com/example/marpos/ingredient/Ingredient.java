package com.example.marpos.ingredient;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@Document
public class Ingredient {
    @Id
    private String id;
    @Indexed(unique = true)
    private String name;
    private IngredientQuantification unit;
    private double quantity;
    private double threshold;
    private LocalDate lastUpdated;

    public Ingredient(String name, IngredientQuantification unit, double quantity, double threshold) {
        this.name = name;
        this.quantity = quantity;
        this.unit = unit;
        this.threshold = threshold;
        this.lastUpdated = LocalDate.now();
    }

    public double getQuantity() {
        return quantity;
    }

    public String getName() {
        return name;
    }

    // Added for editing access in front-end
    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public void setThreshold(double threshold) {
        this.threshold = threshold;
    }
}