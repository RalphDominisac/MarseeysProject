package com.marseeys.backend.entity.possys.order.base;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "DeliveryMethods")
public class DeliveryMethod {
    @Id
    private int id;
    private String name;

    public DeliveryMethod(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
