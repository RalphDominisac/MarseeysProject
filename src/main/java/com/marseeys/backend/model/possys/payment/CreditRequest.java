package com.marseeys.backend.model.possys.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CreditRequest {
    @NotNull(message = "Please provide an order ID.")
    private Integer orderId;

    @NotNull(message = "Please input the amount that you are paying.")
    private Double amount;

    @NotBlank(message = "Please input the customer's card number.")
    @Size(min = 16, max = 16, message = "Please input a valid card number.")
    private String cardNo;
}
