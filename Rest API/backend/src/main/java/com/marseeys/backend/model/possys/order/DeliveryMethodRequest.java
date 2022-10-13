package com.marseeys.backend.model.possys.order;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when adding a new delivery method.")
public class DeliveryMethodRequest {
    @ApiModelProperty(notes = "The name of the delivery method to be registered.")
    @NotBlank(message = "Please enter a name for the delivery method.")
    private String name;
}
