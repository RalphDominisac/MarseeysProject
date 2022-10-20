package com.marseeys.backend.model.invsys.transaction;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when editing a stock in.")
public class EditTransactionInRequest {
    @ApiModelProperty(notes = "The expiry date of the ingredient.")
    @Future(message = "Please enter a valid date")
    @NotNull(message = "Date cannot be null")
    private LocalDate expiryDate;
}
