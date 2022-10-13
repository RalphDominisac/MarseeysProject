package com.marseeys.backend.model.invsys.ingredient;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when adding a new ingredient category.")
public class IngredientCategoryRequest {
    @ApiModelProperty(notes = "The name of the ingredient category to be registered.")
    @NotBlank(message = "Please enter a name for the category.")
    private String name;
}
