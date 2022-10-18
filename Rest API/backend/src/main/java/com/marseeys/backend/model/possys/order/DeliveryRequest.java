package com.marseeys.backend.model.possys.order;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when a customer orders a delivery.")
public class DeliveryRequest {
    @ApiModelProperty(notes = "The name of the customer.")
    private String customer;

    @ApiModelProperty(notes = "The ids of the menu items the customer would like to add " +
            "and their respective quantities.")
    @NotEmpty(message = "Please provide a list of items.")
    private Map<String, Integer> contents;

    @ApiModelProperty(notes = "The discount placed on the order.")
    private double discount;

    @ApiModelProperty(notes = "The destination of the delivery.")
    @NotBlank(message = "Please provide a delivery address.")
    private String address;

    @ApiModelProperty(notes = "The name of the delivery method utilized here. This needs " +
            "an existing delivery method in the database.")
    @NotBlank(message = "Please indicate the specific delivery method.")
    private String deliveryMethod;
}
