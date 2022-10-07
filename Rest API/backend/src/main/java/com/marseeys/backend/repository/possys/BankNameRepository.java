package com.marseeys.backend.repository.possys;

import com.marseeys.backend.entity.possys.payment.BankName;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface BankNameRepository extends MongoRepository<BankName, Integer> {
    @Query("{'name': ?0}")
    Optional<BankName> findBank(String name);
}
