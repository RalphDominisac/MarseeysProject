package com.marseeys.backend.exception;

import com.marseeys.backend.types.ExceptionType;

import lombok.Getter;

@Getter
public class DatabaseException extends Exception{
    private final ExceptionType exceptionType;

    public DatabaseException(Throwable cause, ExceptionType exceptionType) {
        super(exceptionType.getMessage(), cause);
        this.exceptionType = exceptionType;
    }

    public DatabaseException(String input, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + input);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }
//    public DatabaseException(ExceptionType exceptionType) {
//        this.exceptionType = exceptionType;
//    }
//
//
//    public DatabaseException(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }
//
//    public DatabaseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionType exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}