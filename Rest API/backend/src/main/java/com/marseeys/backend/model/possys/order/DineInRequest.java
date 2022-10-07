package com.marseeys.backend.model.possys.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DineInRequest {
    @NotBlank(message = "Please enter a name for the customer.")
    private String customer;

    @NotEmpty(message = "Please provide a list of items.")
    private Map<Integer, Integer> contents;

    @NotNull(message = "Please enter a table number.")
    @Min(value = 1, message = "Minimum value is one.")
    @Max(value = 28, message = "Maximum value is 28.")
    private int tableNo;
}
