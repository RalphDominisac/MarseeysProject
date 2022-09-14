package com.example.marpos.advice;

import com.example.marpos.exception.payment.InsufficientAmountException;
import com.example.marpos.exception.payment.OrderAlreadyPaidException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class PaymentExceptionHandler {

    //  Paid amount is less than total price (InsufficientAmountException) - done
    //  Order has already been paid(OrderAlreadyPaidException) - done

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(InsufficientAmountException.class)
    public Map<String, String> handleInsufficientAmount(InsufficientAmountException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("Paid amount is less than order total", ex.getMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(OrderAlreadyPaidException.class)
    public Map<String, String> handleOrderIsPaid(OrderAlreadyPaidException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("Payment is not needed", ex.getMessage());

        return errorMap;
    }
}
