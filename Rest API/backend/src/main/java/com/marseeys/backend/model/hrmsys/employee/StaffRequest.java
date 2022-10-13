package com.marseeys.backend.model.hrmsys.employee;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StaffRequest {
    @NotEmpty(message = "Please provide a list of employee ids.")
    private List<String> empIds;
}
