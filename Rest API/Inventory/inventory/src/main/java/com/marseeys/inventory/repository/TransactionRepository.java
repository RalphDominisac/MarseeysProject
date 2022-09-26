package com.marseeys.inventory.repository;

import com.marseeys.inventory.entity.transaction.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TransactionRepository extends MongoRepository<Transaction, Integer> {
}
