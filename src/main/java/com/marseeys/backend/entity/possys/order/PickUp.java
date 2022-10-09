package com.marseeys.backend.entity.possys.order;

import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.Map;

@Getter
@Service
@NoArgsConstructor
public class PickUp extends Order {
    private String phoneNo;
    private int estimatedTime;

    public PickUp(int id, String customer, Map<String, Integer> contents, double price, String phoneNo, LocalTime estimatedTime) {
        super(id, customer, contents, price);
        this.phoneNo = phoneNo;
        this.estimatedTime = estimatedTime.getMinute();
    }
}
