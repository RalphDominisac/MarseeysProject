package com.marseeys.backend.model.hrmsys.employee;

import com.marseeys.backend.types.CivilStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.*;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeRequest {
    @NotBlank(message = "Please input the employee's first name.")
    private String firstName;

    @NotBlank(message = "Please input the employee's last name.")
    private String lastName;

    @NotBlank(message = "Please input the employee's contact number.")
    @Size(min = 11, max = 11, message = "Please input a valid contact number.")
    private String contactNo;

    @NotBlank(message = "Please input the employee's address.")
    private String address;

    @NotBlank(message = "Please input the employee's email address.")
    @Email(message = "Please input a valid email address.")
    private String email;

    @NotNull(message = "Please input the employee's birthday.")
    private LocalDate birthday;

    @NotNull(message = "Please input the employee's civil status.")
    private CivilStatus civilStatus;

    @NotEmpty(message = "Please assign a shift to the employee.")
    private List<Integer> shift;
}
