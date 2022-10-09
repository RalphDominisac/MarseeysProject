package com.marseeys.backend.exception;

import com.marseeys.backend.types.ExceptionType;

public class CashException extends Exception{
    private final ExceptionType exceptionType;

    public CashException(ExceptionType exceptionType) {
        this.exceptionType = exceptionType;
    }

    public CashException(String input, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + input);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public CashException(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public CashException(Throwable cause, ExceptionType exceptionType) {
//        super(cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public CashException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionType exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
