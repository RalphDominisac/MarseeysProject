package com.marseeys.backend.model.possys.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.util.Map;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdditionalOrderRequest {
    @NotEmpty(message = "Please provide a list of items.")
    private Map<String, Integer> contents;
}
