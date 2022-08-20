package com.example.marpos.advice;

import com.example.marpos.exception.item.BadSearchException;
import com.example.marpos.exception.item.ItemNotFoundException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class ItemExceptionHandler {

    // Invalid item (MethodArgumentNotValidException) - done
    // Duplicate item (DuplicateKeyException) - done
    // Invalid item type (HttpMessageNotReadableException) - done
    // No items to be shown (BadSearchException) - done
    // No item found in database (ItemNotFoundException) - done

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleInvalidItem(MethodArgumentNotValidException ex) {
        Map<String, String> errorMap = new HashMap<>();

        ex.getBindingResult().getFieldErrors().forEach(error ->
            errorMap.put(error.getField(), error.getDefaultMessage())
        );

        return errorMap;
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(DuplicateKeyException.class)
    public Map<String, String> handleDuplicateItem(DuplicateKeyException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("Cannot have a duplicate name", ex.getMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public Map<String, String> handleInvalidCategory(HttpMessageNotReadableException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("Please indicate a valid category", ex.getMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(IllegalArgumentException.class)
    public Map<String, String> handleInvalidCategoryArgument(IllegalArgumentException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("No such category", ex.getMessage());

        return errorMap;
    }

    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    @ExceptionHandler(BadSearchException.class)
    public Map<String, String> handleNoItemsFound(BadSearchException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("message", ex.getMessage());

        return errorMap;
    }

    @ResponseStatus
    @ExceptionHandler(ItemNotFoundException.class)
    public Map<String, String> handleNoSuchItem(ItemNotFoundException ex) {
        Map<String, String> errorMap = new HashMap<>();

        errorMap.put("message", ex.getMessage());

        return errorMap;
    }
}
