package com.marseeys.backend.repository.hrmsys;

import com.marseeys.backend.entity.hrmsys.employee.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends MongoRepository<Employee, String> {
    @Query("{ 'active': true }")
    List<Employee> viewEmployees();
    @Query("{$and: [ {'_id': ?0}, {'active': true}] }")
    Optional<Employee> findEmployee(String id);
}
