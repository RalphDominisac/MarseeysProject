package com.marseeys.backend.repository.possys;

import com.marseeys.backend.entity.possys.order.base.Order;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface OrderRepository extends MongoRepository<Order, Integer> {
    @Query("{$and: [ {$or: [ {'paid': false}, {'served': false} ]}, {'canceled': false} ]}")
    List<Order> findPendingOrders();
}
