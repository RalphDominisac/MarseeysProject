package com.marseeys.backend.exception;

import com.marseeys.backend.types.ExceptionType;

public class DuplicateException extends Exception{
    ExceptionType exceptionType;

    public DuplicateException(String imput, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + imput);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public DuplicateException(ExceptionType exceptionType) {
//        this.exceptionType = exceptionType;
//    }
//
//    public DuplicateException(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public DuplicateException(Throwable cause, ExceptionType exceptionType) {
//        super(exceptionType.getMessage(), cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public DuplicateException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionType exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
