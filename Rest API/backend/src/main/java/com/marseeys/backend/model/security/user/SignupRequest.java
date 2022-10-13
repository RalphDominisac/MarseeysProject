package com.marseeys.backend.model.security.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
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
@ApiModel(description = "Credentials to be used for signing up.")
public class SignupRequest {
    @ApiModelProperty(notes = "The username of the user.")
    @NotBlank(message = "Please input a username for the user.")
    @Size(min = 3, max = 20, message = "Please input a valid username for the user.")
    private String username;

    @ApiModelProperty(notes = "The email of the user.")
    @NotBlank(message = "Please input an email for the user.")
    @Size(max = 50, message = "Please input a valid email for the user.")
    @Email(message = "Please input a valid email for the user.")
    private String email;

    @ApiModelProperty(notes = "The roles of the user.")
    private Set<String> roles;

    @ApiModelProperty(notes = "The password of the user.")
    @NotBlank(message = "Please input a password for the user.")
    @Size(min = 6, max = 40, message = "Please input a valid password for the user.")
    private String password;
}
