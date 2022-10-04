package com.marseeys.backend.entity.security.role;

import com.marseeys.backend.types.RoleEnum;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "Roles")
public class Role {
    @Id
    private int id;
    private RoleEnum name;

    public Role(int id, RoleEnum name) {
        this.id = id;
        this.name = name;
    }
}
