package com.marseeys.backend.model.invsys.transaction;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when adding quantity to an existing ingredient.")
public class TransactionInRequest {
    @ApiModelProperty(notes = "The id of the ingredient.")
    @NotNull(message = "Please input a valid ID.")
    @Min(value = 1, message = "Please input a valid ID.")
    private int ingredient;

    @ApiModelProperty(notes = "The quantity to be added.")
    @NotNull(message = "Quantity cannot be null.")
    @Min(value = 1, message = "Please input a valid quantity.")
    private double quantity;

    @ApiModelProperty(notes = "Additional notes of the transaction.")
    @NotBlank(message = "Please input a remark.")
    private String remarks;

    @ApiModelProperty(notes = "The expiry date of the added ingredient.")
    @NotNull(message = "Please input a date.")
    @Future(message = "Please input a valid date.")
    private LocalDate expiryDate;
}
