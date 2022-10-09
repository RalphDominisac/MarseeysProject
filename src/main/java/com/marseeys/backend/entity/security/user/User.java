package com.marseeys.backend.entity.security.user;

import com.marseeys.backend.entity.security.role.Role;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Document(collection = "Users")
public class User {
    @Id
    private String id;
    @DocumentReference(collection = "Roles")
    private Set<Role> roles;
    private String email;
    private String username;
    private String password;
    private boolean active;

    public User(String email, String username, String password) {
        this.roles = new HashSet<>();
        this.email = email;
        this.username = username;
        this.password = password;
        this.active = true;
    }
}