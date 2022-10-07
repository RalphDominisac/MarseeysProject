package com.marseeys.backend.helper;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.CashException;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@AllArgsConstructor
public class CalculationHelper {
    public double getOrderTotal(List<Menu> contents) {
        double total = 0;

        for (Menu content : contents) {
            total += content.getPrice();
        }

        return total;
    }

    public double calculateChange(Order order, double amount) throws CashException {
        if (order.isPaid()) {
            throw new CashException(
                    String.valueOf(order.getId()),
                    ExceptionType.PAYMENT_ALREADY_MADE_EXCEPTION
            );
        }

        double change = amount - order.getPrice();

        if (change < 0) {
            throw new CashException(
                    ExceptionType.PAYMENT_INSUFFICIENT_EXCEPTION
            );
        }

        return change;
    }
}
