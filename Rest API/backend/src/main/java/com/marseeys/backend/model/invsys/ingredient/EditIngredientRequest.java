package com.marseeys.backend.model.invsys.ingredient;

import com.marseeys.backend.types.UnitMeasure;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Future;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Details to be used when adding an ingredient to inventory.")
public class EditIngredientRequest {
    @ApiModelProperty(notes = "The name of the ingredient.")
    @NotBlank(message = "Please input a valid name")
    private String name;

    @ApiModelProperty(notes = "The category that the ingredient will be classified as.")
    @NotBlank(message = "Category cannot be null")
    private String ingredientCategory;

    @ApiModelProperty(notes = "The unit measure to be used for the ingredient.")
    @NotNull(message = "Unit measure cannot be null")
    private UnitMeasure unitMeasure;

    @ApiModelProperty(notes = "The reorder point of the ingredient. Suggested to be 25% of the " +
            "average quantity.")
    @Min(value = 1, message = "Please input a reorder point")
    private int threshold;  // reorder point
}
