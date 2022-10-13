package com.marseeys.backend.model.possys.order;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when a customer has additional orders.")
public class AdditionalOrderRequest {
    @ApiModelProperty(notes = "The ids of the menu items the customer would like to add " +
            "and their respective quantities.")
    @NotEmpty(message = "Please provide a list of items.")
    private Map<String, Integer> contents;
}
