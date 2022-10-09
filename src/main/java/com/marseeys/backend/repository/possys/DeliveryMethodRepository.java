package com.marseeys.backend.repository.possys;

import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface DeliveryMethodRepository extends MongoRepository<DeliveryMethod, Integer> {
    @Query("{'name': ?0}")
    Optional<DeliveryMethod> findMethod(String method);
}
