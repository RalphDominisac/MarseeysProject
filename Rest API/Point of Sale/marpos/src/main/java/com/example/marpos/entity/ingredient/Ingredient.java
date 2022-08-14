package com.example.marpos.entity.ingredient;

import com.example.marpos.enumeration.ItemType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document(collection = "inventory")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Ingredient {
    private String name;
}
