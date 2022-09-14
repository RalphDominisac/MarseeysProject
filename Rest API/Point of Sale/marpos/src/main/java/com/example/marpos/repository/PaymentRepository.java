package com.example.marpos.repository;

import com.example.marpos.entity.payment.Payment;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaymentRepository extends MongoRepository<Payment, Integer> {
}
