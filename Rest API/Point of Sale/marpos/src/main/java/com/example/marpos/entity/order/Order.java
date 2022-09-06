package com.example.marpos.entity.order;

import com.example.marpos.entity.item.Item;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Document(collection = "Orders")
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Order {
    @Id
    private int orderId;
    private String customer;
    @DBRef(db = "Menu")
    private List<Item> contents;
    private double price;
    @CreatedDate
    private LocalDateTime date;
    private boolean paid;
    private boolean served;
    private boolean canceled;
}
