package com.marseeys.backend.repository.hrmsys;

import com.marseeys.backend.entity.hrmsys.employee.Shift;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ShiftRepository extends MongoRepository<Shift, Integer> {
}
