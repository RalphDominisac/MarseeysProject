package com.marseeys.backend.entity.hrmsys.employee;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalTime;

@Getter
@Setter
@Document(collection = "Shifts")
public class Shift {
    @Id
    private int id;
    private LocalTime start;
    private LocalTime end;

    public Shift(int id, LocalTime start, LocalTime end) {
        this.id = id;
        this.start = start;
        this.end = end;
    }

    @Override
    public String toString() {
        return start + " - " + end;
    }
}
