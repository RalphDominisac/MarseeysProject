package com.marseeys.backend.repository;

import com.marseeys.backend.entity.security.role.Role;
import com.marseeys.backend.types.RoleEnum;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, Integer> {
    @Query("{'name': ?0}")
    Optional<Role> findByRole(RoleEnum name);
}
