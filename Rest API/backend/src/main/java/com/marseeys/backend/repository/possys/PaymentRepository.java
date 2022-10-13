package com.marseeys.backend.repository.possys;

import com.marseeys.backend.entity.possys.payment.Cash;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Cash, Integer> {
}
