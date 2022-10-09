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
public class BankTransferRequest {
    @NotNull(message = "Please provide an order ID")
    private Integer orderId;

    @NotNull(message = "Please input the amount that you are paying.")
    private Double amount;

    @NotBlank(message = "Please input an account number.")
    @Size(min = 10, max = 16, message = "Please input a valid account number.")
    private String accountNo;

    @NotBlank(message = "Please provide a bank name.")
    private String bankName;

    @NotBlank(message = "Please provide the customer's contact number.")
    @Size(min = 11, max = 11, message = "Please input a valid contact number.")
    private String contactNo;
}
