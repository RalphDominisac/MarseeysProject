package com.marseeys.backend.model.possys.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CashRequest {
    @NotNull(message = "Please provide an order ID.")
    private Integer orderId;

    @NotNull(message = "Please input the amount that you are paying.")
    private Double amount;
}
