package com.marseeys.backend.model.possys.menu;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when creating a new menu item.")
public class MenuRequest {
    @ApiModelProperty(notes = "The name of the menu item.")
    @NotBlank(message = "Please input a name for the menu item.")
    private String name;

    @ApiModelProperty(notes = "The price of the menu item.")
    @NotNull(message = "Please input a price for the menu item.")
    @Min(value = 10, message = "Minimum price for a menu item is 10.")
    private double price;

    @ApiModelProperty(notes = "The category that the menu item will be classified as.")
    @NotBlank(message = "Please indicate a valid category for the item.")
    private String category;

    @ApiModelProperty(notes = "The ids of the ingredients the dish would use " +
            "and their respective quantities.")
    @NotEmpty(message = "Please provide a list of ingredients")
    private Map<String, Double> ingredients;
}
