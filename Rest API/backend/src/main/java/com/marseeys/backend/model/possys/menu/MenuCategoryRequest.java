package com.marseeys.backend.model.possys.menu;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when adding a new menu category.")
public class MenuCategoryRequest {
    @ApiModelProperty(notes = "The name of the menu category to be registered.")
    @NotBlank(message = "Please enter a name for the category.")
    private String name;
}
