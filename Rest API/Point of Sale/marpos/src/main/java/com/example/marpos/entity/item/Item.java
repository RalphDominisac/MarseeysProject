package com.example.marpos.entity.item;

import com.example.marpos.entity.ingredient.Ingredient;
import com.example.marpos.enumeration.ItemType;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "menu")
@AllArgsConstructor
@NoArgsConstructor
public class Item {
    @Id
    private ObjectId id;
    @Indexed(unique = true)
    private String name;
    private double price;
    private List<Ingredient> ingredients;
    private ItemType type;
    private boolean isAvailable;
}
