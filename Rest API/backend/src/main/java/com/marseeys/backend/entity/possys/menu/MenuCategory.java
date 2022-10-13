package com.marseeys.backend.entity.possys.menu;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "MenuCategories")
public class MenuCategory {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;

    public MenuCategory(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
