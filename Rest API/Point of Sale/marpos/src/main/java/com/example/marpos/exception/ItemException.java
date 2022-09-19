package com.example.marpos.exception;

import com.example.marpos.types.ExceptionTypeEnum;

public class ItemException extends Exception{
    private final ExceptionTypeEnum exceptionType;

    public ItemException(String orderId, ExceptionTypeEnum exceptionType) {
        super(exceptionType.getMessage() + orderId);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public ItemException(ExceptionTypeEnum exceptionType) {
//        this.exceptionType = exceptionType;
//    }

//    public ItemException(String message, Throwable cause, ExceptionTypeEnum exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }

//    public ItemException(Throwable cause, ExceptionTypeEnum exceptionType) {
//        super(cause);
//        this.exceptionType = exceptionType;
//    }

//    public ItemException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionTypeEnum exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
