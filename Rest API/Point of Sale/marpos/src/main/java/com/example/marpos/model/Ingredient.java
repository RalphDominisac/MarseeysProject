package com.example.marpos.model;

import com.example.marpos.constant.IngredientQuantification;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
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
}