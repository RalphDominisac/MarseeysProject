package com.marseeys.backend.model.possys.payment;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when creating a bank.")
public class BankNameRequest {
    @ApiModelProperty(notes = "The name of the bank.")
    @NotBlank(message = "Please enter a name for the bank.")
    private String name;
}
