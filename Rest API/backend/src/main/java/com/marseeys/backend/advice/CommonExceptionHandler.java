package com.marseeys.backend.advice;

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
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleInvalidInputs(MethodArgumentNotValidException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("errorName", ex.getClass().getSimpleName());
        ex.getBindingResult().getFieldErrors().forEach(error ->
                errorMap.put(error.getField(), error.getDefaultMessage())
        );

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public Map<String, String> handleObjTypeError(HttpMessageNotReadableException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("errorName", ex.getClass().getSimpleName());
        errorMap.put("errorMessage", "Invalid data type passed.");
        errorMap.put("errorCause", "In object, " + ex.getLocalizedMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public Map<String, String> handleUrlTypeError(IllegalArgumentException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("errorName", ex.getClass().getSimpleName());
        errorMap.put("errorMessage", "Invalid data type passed.");
        errorMap.put("errorCause", "In URL, " + ex.getLocalizedMessage());

        return errorMap;
    }
}
