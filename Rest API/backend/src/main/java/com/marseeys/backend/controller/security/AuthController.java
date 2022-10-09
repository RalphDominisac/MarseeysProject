package com.marseeys.backend.controller.security;

import com.marseeys.backend.exception.DuplicateException;
import com.marseeys.backend.model.security.response.JwtResponse;
import com.marseeys.backend.model.security.user.LoginRequest;
import com.marseeys.backend.model.security.user.SignupRequest;
import com.marseeys.backend.service.security.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
public class AuthController {
    private final UserService userService;

    @PostMapping("/signin")
    @ApiOperation(
            value = "Signs in the system using the provided username and password.",
            notes = "Use the token provided after a successful login to access different commands. " +
                    "Place it under the 'Authorization' HTTP Header having a value of 'Bearer <token>'",
            response = JwtResponse.class
    )
    public ResponseEntity<JwtResponse> authenticateUser(
            @ApiParam(value = "Credentials of the user.", required = true)
            @Valid @RequestBody LoginRequest loginRequest
    ) {
        return ResponseEntity.ok(userService.userLogin(loginRequest));
    }

    @PostMapping("/signup")
    public ResponseEntity<String> registerUser(@Valid @RequestBody SignupRequest signupRequest) throws DuplicateException {
        userService.userSignup(signupRequest);
        return new ResponseEntity<>("User successfully registered!", HttpStatus.CREATED);
    }
}
