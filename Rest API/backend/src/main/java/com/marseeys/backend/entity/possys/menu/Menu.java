package com.marseeys.backend.entity.possys.menu;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Map;

@Getter
@Setter
@Document(collection = "Menu")
public class Menu {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;
    private double price;
    @DocumentReference(collection = "MenuCategories")
    private MenuCategory category;
    private boolean deleted;
    private Map<String, Double> ingredients;
//    private boolean available;

    public Menu(int id, String name, double price, MenuCategory category, Map<String, Double> ingredients) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.deleted = false;
        this.ingredients = ingredients;
    }
}
