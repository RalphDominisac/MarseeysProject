package com.marseeys.backend.exception;

import com.marseeys.backend.types.ExceptionType;

public class IngredientException extends Exception{
    private final ExceptionType exceptionType;

    public IngredientException(String input, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + input);
        this.exceptionType = exceptionType;
    }

    public IngredientException(ExceptionType exceptionType) {
        super(exceptionType.getMessage());
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public IngredientException(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public IngredientException(Throwable cause, ExceptionType exceptionType) {
//        super(cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public IngredientException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionType exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
