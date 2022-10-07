package com.marseeys.backend.exception;

import com.marseeys.backend.types.ExceptionType;

public class MenuException extends Exception{
    private final ExceptionType exceptionType;

    public MenuException(String input, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + input);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public MenuException(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public MenuException(Throwable cause, ExceptionType exceptionType) {
//        super(cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public MenuException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionType exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
