package com.marseeys.backend.model.possys.order;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when a customer orders a dine in.")
public class DineInRequest {
    @ApiModelProperty(notes = "The name of the customer.")
    @NotBlank(message = "Please enter a name for the customer.")
    private String customer;

    @ApiModelProperty(notes = "The ids of the menu items the customer would like to add " +
            "and their respective quantities.")
    @NotEmpty(message = "Please provide a list of items.")
    private Map<String, Integer> contents;

    @ApiModelProperty(notes = "The table number referring to where the customer is sitting.")
    @NotNull(message = "Please enter a table number.")
    @Min(value = 1, message = "Minimum value is one.")
    @Max(value = 28, message = "Maximum value is 28.")
    private int tableNo;
}
