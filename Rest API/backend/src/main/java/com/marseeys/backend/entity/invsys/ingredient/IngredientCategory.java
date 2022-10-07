package com.marseeys.backend.entity.invsys.ingredient;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "IngredientCategories")
public class IngredientCategory {
    @Id
    private int id;
    private String name;

    public IngredientCategory(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
