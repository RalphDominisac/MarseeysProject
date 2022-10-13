package com.marseeys.backend.model.possys.payment;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when paying for an order through cash.")
public class CashRequest {
    @ApiModelProperty(notes = "The id of the order.")
    @NotNull(message = "Please provide an order ID.")
    private Integer orderId;

    @ApiModelProperty(notes = "The amount the customer is paying.")
    @NotNull(message = "Please input the amount that you are paying.")
    private Double amount;
}
