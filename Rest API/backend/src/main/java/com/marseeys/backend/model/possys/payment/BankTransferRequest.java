package com.marseeys.backend.model.possys.payment;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when paying for an order through bank transfer.")
public class BankTransferRequest {
    @ApiModelProperty(notes = "The id of the order.")
    @NotNull(message = "Please provide an order ID")
    private Integer orderId;

    @ApiModelProperty(notes = "The amount the customer is paying.")
    @NotNull(message = "Please input the amount that you are paying.")
    private Double amount;

    @ApiModelProperty(notes = "The account number of the customer.")
    @NotBlank(message = "Please input an account number.")
    @Size(min = 10, max = 16, message = "Please input a valid account number.")
    private String accountNo;

    @ApiModelProperty(notes = "The bank name that the customer's bank account.")
    @NotBlank(message = "Please provide a bank name.")
    private String bankName;

    @ApiModelProperty(notes = "The contact number of the customer.")
    @NotBlank(message = "Please provide the customer's contact number.")
    @Size(min = 11, max = 11, message = "Please input a valid contact number.")
    private String contactNo;
}
