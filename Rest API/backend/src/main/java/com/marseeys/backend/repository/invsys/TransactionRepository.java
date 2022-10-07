package com.marseeys.backend.repository.invsys;

import com.marseeys.backend.entity.invsys.transaction.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepository extends MongoRepository<Transaction, Integer> {
}
