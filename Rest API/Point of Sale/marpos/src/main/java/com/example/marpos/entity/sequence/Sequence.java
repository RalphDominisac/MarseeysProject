package com.example.marpos.entity.sequence;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "Sequences")
public class Sequence {
    @Id
    private String id;
    private int seq;
}
