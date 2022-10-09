package com.marseeys.backend.model.possys.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryMethodRequest {
    @NotBlank(message = "Please enter a name for the delivery method.")
    private String name;
}
