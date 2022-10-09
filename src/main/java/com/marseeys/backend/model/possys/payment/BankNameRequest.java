package com.marseeys.backend.model.possys.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BankNameRequest {
    @NotBlank(message = "Please enter a name for the bank.")
    private String name;
}
