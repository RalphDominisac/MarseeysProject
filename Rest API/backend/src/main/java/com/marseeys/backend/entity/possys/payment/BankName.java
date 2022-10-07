package com.marseeys.backend.entity.possys.payment;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "BankNames")
public class BankName {
    @Id
    private int id;
    private String name;

    public BankName(int id, String name) {
        this.id = id;
        this.name = name;
    }
}
