package com.marseeys.backend.model.security.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest {
    @NotBlank(message = "Please input a username for the user.")
    @Size(min = 3, max = 20, message = "Please input a valid username for the user.")
    private String username;

    @NotBlank(message = "Please input an email for the user.")
    @Size(max = 50, message = "Please input a valid email for the user.")
    @Email(message = "Please input a valid email for the user.")
    private String email;

    private Set<String> roles;

    @NotBlank(message = "Please input a password for the user.")
    @Size(min = 6, max = 40, message = "Please input a valid password for the user.")
    private String password;
}
