package com.marseeys.backend.controller;

import com.marseeys.backend.entity.security.role.Role;
import com.marseeys.backend.entity.security.user.User;
import com.marseeys.backend.entity.security.user.UserDetailsImpl;
import com.marseeys.backend.helper.JwtUtils;
import com.marseeys.backend.model.security.response.JwtResponse;
import com.marseeys.backend.model.security.response.MessageResponse;
import com.marseeys.backend.model.security.user.LoginRequest;
import com.marseeys.backend.model.security.user.SignupRequest;
import com.marseeys.backend.repository.RoleRepository;
import com.marseeys.backend.repository.UserRepository;
import com.marseeys.backend.types.RoleEnum;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/api/v1/auth")
@AllArgsConstructor
public class AuthController {
    AuthenticationManager authenticationManager;
    UserRepository userRepository;
    RoleRepository roleRepository;
    PasswordEncoder encoder;
    JwtUtils jwtUtils;

    @PostMapping("/signin")
    @ApiOperation(
            value = "Signs in the system using the provided username and password.",
            notes = "Use the token provided after a successful login to access different commands. " +
                    "Place it under the 'Authorization' HTTP Header having a value of 'Bearer <token>'",
            response = JwtResponse.class
    )
    public ResponseEntity<?> authenticateUser(@ApiParam(value = "Credentials of the user.", required = true)
                                                  @Valid @RequestBody LoginRequest loginRequest) throws NoSuchAlgorithmException, InvalidKeySpecException {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles
        ));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Error: Username is already taken!"));
        }

        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            return ResponseEntity.badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        User user = new User(
                signupRequest.getEmail(),
                signupRequest.getUsername(),
                encoder.encode(signupRequest.getPassword())
        );

        Set<String> strRoles = signupRequest.getRoles();
        Set<Role> roles = new HashSet<>();

        if (strRoles.isEmpty()) {
            Role userRole = roleRepository.findByRole(RoleEnum.ROLE_USER).orElseThrow(
                    () -> new RuntimeException(
                            "Error: Role is not found."
                    )
            );

            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByRole(RoleEnum.ROLE_ADMIN).orElseThrow(
                                () -> new RuntimeException(
                                        "Error: Role is not found."
                                )
                        );

                        roles.add(adminRole);
                        break;
                    case "mod":
                        Role modRole = roleRepository.findByRole(RoleEnum.ROLE_MODERATOR).orElseThrow(
                                () -> new RuntimeException(
                                        "Error: Role is not found."
                                )
                        );

                        roles.add(modRole);
                        break;
                    default:
                        Role userRole = roleRepository.findByRole(RoleEnum.ROLE_USER).orElseThrow(
                                () -> new RuntimeException(
                                        "Error: Role is not found."
                                )
                        );

                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
