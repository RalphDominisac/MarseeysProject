package com.marseeys.backend.service.security;

import com.marseeys.backend.entity.security.role.Role;
import com.marseeys.backend.entity.security.user.User;
import com.marseeys.backend.entity.security.user.UserDetailsImpl;
import com.marseeys.backend.exception.DuplicateException;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.helper.JwtUtils;
import com.marseeys.backend.model.security.response.JwtResponse;
import com.marseeys.backend.model.security.user.LoginRequest;
import com.marseeys.backend.model.security.user.SignupRequest;
import com.marseeys.backend.repository.security.UserRepository;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final DatabaseHelper databaseHelper;
    private final JwtUtils jwtUtils;

    public JwtResponse userLogin(LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginRequest.getUsername(),
                loginRequest.getPassword()
        ));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        List<String> roles = userDetails.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());

        return new JwtResponse(
                jwt,
                userDetails.getId(),
                userDetails.getUsername(),
                userDetails.getEmail(),
                roles
        );
    }

    public void userSignup(SignupRequest signupRequest) throws DuplicateException {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new DuplicateException(
                    signupRequest.getEmail(),
                    ExceptionType.EMAIL_ALREADY_TAKEN_EXCEPTION
            );
        }

        if (userRepository.existsByUsername(signupRequest.getUsername())) {
            throw new DuplicateException(
                    signupRequest.getUsername(),
                    ExceptionType.USERNAME_ALREADY_TAKEN_EXCEPTION
            );
        }

        User user = new User(
                signupRequest.getEmail(),
                signupRequest.getUsername(),
                passwordEncoder.encode(signupRequest.getPassword())
        );

        Set<Role> roles = databaseHelper.getRoles(signupRequest.getRoles());
        user.setRoles(roles);

        userRepository.save(user);
    }
}
