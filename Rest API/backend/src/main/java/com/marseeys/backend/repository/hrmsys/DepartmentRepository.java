package com.marseeys.backend.repository.hrmsys;

import com.marseeys.backend.entity.hrmsys.department.Department;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface DepartmentRepository extends MongoRepository<Department, Integer> {
    @Query("{ 'deleted': false }")
    List<Department> viewDepartments();
}
