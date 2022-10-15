package com.marseeys.backend.repository.invsys;

import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface TransactionRepository extends MongoRepository<Transaction, String> {
    @Query("{ $or: [ {'relevant' : true}, {'relevant' : false} ] }")
    List<Transaction> findTransactions();
    @Query("{ $and: [ {'relevant' : true}, {'_class': 'com.marseeys.backend.entity.invsys.transaction.TransactionIn'}, {'deleted': false}  ] }")
    List<TransactionIn> findRelevantTransactions();
    @Query("{ $and: [ {'_id' : ?0}, {'_class': 'com.marseeys.backend.entity.invsys.transaction.TransactionIn'}, {'deleted': false} ] }")
    Optional<TransactionIn> findTransactionIn(String id);
}
