package com.example.marpos.advice;

import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class CommonExceptionHandler {
    /**
     * Handles request validation exceptions.
     * @param ex Exception
     * @return map of validation error messages
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleInvalidRequests(MethodArgumentNotValidException ex) {
        Map<String, String> errorMap = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error ->
                errorMap.put(error.getField(), error.getDefaultMessage())
        );

        return errorMap;
    }

    /**
     * Handles invalid URL inputs for GET in ItemController.
     * @param ex Exception
     * @return map of validation error messages
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public Map<String, String> handleInvalidCategory(HttpMessageNotReadableException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("Please indicate a valid category.", ex.getMessage());

        return errorMap;
    }

    /**
     * Handles invalid category requests when creating or editing an item for POST in ItemController.
     * @param ex Exception
     * @return map of validation error messages
     */
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public Map<String, String> handleInvalidCategoryArgument(IllegalArgumentException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("Invalid category provided. ", ex.getMessage());

        return errorMap;
    }
}
