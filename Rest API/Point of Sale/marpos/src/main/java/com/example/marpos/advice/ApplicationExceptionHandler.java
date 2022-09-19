package com.example.marpos.advice;

import com.example.marpos.exception.DatabaseException;
import com.example.marpos.exception.ItemException;
import com.example.marpos.exception.PaymentException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {
    /**
     * Handles database exceptions.
     * @param ex Exception
     * @return map of error messages
     */
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(DatabaseException.class)
    public Map<String, String> handleDatabaseException(DatabaseException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());

        return errorMap;
    }

    /**
     * Handles item exceptions.
     * @param ex Exception
     * @return map of error messages
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(ItemException.class)
    public Map<String, String> handleItemException(ItemException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());

        return errorMap;
    }

    /**
     * Handles payment exceptions.
     * @param ex Exception
     * @return map of error messages
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(PaymentException.class)
    public Map<String, String> handlePaymentException(PaymentException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());

        return errorMap;
    }
}
