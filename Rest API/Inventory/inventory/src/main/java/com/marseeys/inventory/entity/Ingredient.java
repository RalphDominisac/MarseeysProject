package com.marseeys.inventory.entity;

import com.marseeys.inventory.enumeration.Classification;
import com.marseeys.inventory.enumeration.Unit;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "Ingredients")
@AllArgsConstructor(staticName = "create")
@NoArgsConstructor
public class Ingredient {
    @Id
    private int id;
    @Indexed(unique = true)
    private String name;
    private Classification classification;
    private Unit unit;
    private int quantity;
    private int threshold;
    private LocalDateTime updated;
}
