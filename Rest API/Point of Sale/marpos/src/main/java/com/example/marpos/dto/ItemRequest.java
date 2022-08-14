package com.example.marpos.dto;

import com.example.marpos.entity.ingredient.Ingredient;
import com.example.marpos.enumeration.ItemType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ItemRequest {
    private String name;
    private double price;
    private List<Ingredient> ingredients;
    private ItemType type;
    private boolean isAvailable;
}
