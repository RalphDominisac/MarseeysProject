package com.example.marpos;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class MenuItem {
    @Id
    private String id;
    private String name;
    private List<Ingredient> ingredients;

    public MenuItem(String name, List<Ingredient> ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}
