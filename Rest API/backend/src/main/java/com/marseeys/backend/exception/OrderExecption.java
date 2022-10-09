package com.marseeys.backend.exception;

import com.marseeys.backend.types.ExceptionType;

public class OrderExecption extends Exception{
    private final ExceptionType exceptionType;

    public OrderExecption(ExceptionType exceptionType) {
        this.exceptionType = exceptionType;
    }

    public OrderExecption(String input, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + input);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }
//
//    public OrderExecption(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public OrderExecption(Throwable cause, ExceptionType exceptionType) {
//        super(cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public OrderExecption(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionType exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
