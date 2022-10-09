package com.marseeys.backend.model.invsys.transaction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TransactionRequest {
    @NotNull(message = "Please input a valid ID")
    @Min(value = 1, message = "Please input a valid ID")
    private int ingredient;

    @NotNull(message = "Quantity cannot be null")
    @Min(value = 1, message = "Please input a valid quantity")
    private double quantity;
    private boolean add;
}
