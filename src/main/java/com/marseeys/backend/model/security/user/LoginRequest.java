package com.marseeys.backend.model.security.user;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(description = "Credentials to be used for logging in.")
public class LoginRequest {
    @ApiModelProperty(notes = "The username of the user.")
    @NotBlank(message = "Please provide a username.")
    private String username;

    @ApiModelProperty(notes = "The password of the user.")
    @NotBlank(message = "Please provide a password.")
    private String password;
}
