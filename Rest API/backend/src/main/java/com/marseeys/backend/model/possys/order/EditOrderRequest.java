package com.marseeys.backend.model.possys.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EditOrderRequest {
    @NotBlank(message = "Please enter a name for the customer.")
    private String customer;

    @NotEmpty(message = "Please provide a list of items.")
    private List<Integer> contents;

    private boolean paid;
    private boolean served;
    private boolean canceled;
}
