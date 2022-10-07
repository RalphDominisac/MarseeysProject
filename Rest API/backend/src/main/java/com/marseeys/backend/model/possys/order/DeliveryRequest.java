package com.marseeys.backend.model.possys.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DeliveryRequest {
    @NotBlank(message = "Please enter a name for the customer.")
    private String customer;

    @NotEmpty(message = "Please provide a list of items.")
    private Map<Integer, Integer> contents;

    @NotBlank(message = "Please provide a delivery address.")
    private String address;

    @NotBlank(message = "Please indicate the specific delivery method.")
    private String deliveryMethod;
}
