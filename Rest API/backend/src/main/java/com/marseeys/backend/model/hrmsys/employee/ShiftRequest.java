package com.marseeys.backend.model.hrmsys.employee;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ShiftRequest {
    private LocalTime start;
    private LocalTime end;
}
