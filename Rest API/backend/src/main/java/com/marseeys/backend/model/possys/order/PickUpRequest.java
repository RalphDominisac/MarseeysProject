package com.marseeys.backend.model.possys.order;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.time.LocalTime;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when a customer orders a pick up.")
public class PickUpRequest {
    @ApiModelProperty(notes = "The name of the customer.")
    private String customer;

    @ApiModelProperty(notes = "The ids of the menu items the customer would like to add " +
            "and their respective quantities.")
    @NotEmpty(message = "Please provide a list of items.")
    private Map<String, Integer> contents;

    @ApiModelProperty(notes = "The contact number of the customer.")
    @NotBlank(message = "Please provide a phone number.")
    @Size(min = 11, max = 11, message = "Please input a valid phone number.")
    private String phoneNo;

    @ApiModelProperty(notes = "The estimated ready time of the pickup.")
    @Future(message = "Please enter a valid time.")
    @NotNull(message = "Time cannot be null.")
    private LocalTime estimatedTime;
}
