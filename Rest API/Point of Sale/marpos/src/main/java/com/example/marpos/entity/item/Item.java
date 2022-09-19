package com.example.marpos.entity.item;

import com.example.marpos.types.MenuCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Menu")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Item {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;
    private double price;
//    private List<IngredientRequest> ingredientRequests;
    private MenuCategory category;
    private boolean available;
    private boolean deleted;
}
