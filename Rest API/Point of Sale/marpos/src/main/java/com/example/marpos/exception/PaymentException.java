package com.example.marpos.exception;

import com.example.marpos.types.ExceptionTypeEnum;

public class PaymentException extends Exception{
    private final ExceptionTypeEnum exceptionType;

    public PaymentException(ExceptionTypeEnum exceptionTypeEnum) {
        super(exceptionTypeEnum.getMessage());
        this.exceptionType = exceptionTypeEnum;
    }

    public PaymentException(String orderId, ExceptionTypeEnum exceptionType) {
        super(exceptionType.getMessage() + orderId);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public PaymentException(String message, Throwable cause, ExceptionTypeEnum exceptionTypeEnum) {
//        super(message, cause);
//        this.exceptionTypeEnum = exceptionTypeEnum;
//    }

//    public PaymentException(Throwable cause, ExceptionTypeEnum exceptionTypeEnum) {
//        super(cause);
//        this.exceptionTypeEnum = exceptionTypeEnum;
//    }

//    public PaymentException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionTypeEnum exceptionTypeEnum) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionTypeEnum = exceptionTypeEnum;
//    }
}
