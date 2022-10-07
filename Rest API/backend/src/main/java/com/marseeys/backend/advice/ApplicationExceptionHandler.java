package com.marseeys.backend.advice;

import com.marseeys.backend.exception.CashException;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.MenuException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ApplicationExceptionHandler {
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(DatabaseException.class)
    public Map<String, String> handleDatabaseException(DatabaseException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MenuException.class)
    public Map<String, String> handleItemException(MenuException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(CashException.class)
    public Map<String, String> handlePaymentException(CashException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put(ex.getErrorId(), ex.getMessage());

        return errorMap;
    }
}
