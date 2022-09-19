package com.example.marpos.exception;

import com.example.marpos.types.ExceptionTypeEnum;
import lombok.Getter;

@Getter
public class DatabaseException extends Exception {
    private final ExceptionTypeEnum exceptionType;

    public DatabaseException(String recordId, ExceptionTypeEnum exceptionType) {
        super(exceptionType.getMessage() + recordId);
        this.exceptionType = exceptionType;
    }

    public DatabaseException(Throwable cause, ExceptionTypeEnum exceptionType) {
        super(exceptionType.getMessage(), cause);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }

//    public DatabaseException(ExceptionTypeEnum exceptionType) {
//        super(exceptionType.getMessage());
//        this.exceptionType = exceptionType;
//    }

//    public DatabaseException(String message, Throwable cause, ExceptionTypeEnum exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }

//    public DatabaseException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, ExceptionTypeEnum exceptionType) {
//        super(message, cause, enableSuppression, writableStackTrace);
//        this.exceptionType = exceptionType;
//    }
}
