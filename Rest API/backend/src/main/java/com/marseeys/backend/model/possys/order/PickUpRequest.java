package com.marseeys.backend.model.possys.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.time.LocalTime;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PickUpRequest {
    @NotBlank(message = "Please enter a name for the customer.")
    private String customer;

    @NotEmpty(message = "Please provide a list of items.")
    private Map<Integer, Integer> contents;

    @NotBlank(message = "Please provide a phone number.")
    @Size(min = 11, max = 11, message = "Please input a valid phone number.")
    private String phoneNo;

    @Future(message = "Please enter a valid time.")
    @NotNull(message = "Time cannot be null.")
    private LocalTime estimatedTime;
}
