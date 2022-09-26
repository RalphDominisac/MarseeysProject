package com.marseeys.inventory.exception;

import com.marseeys.inventory.types.ExceptionType;
import lombok.Getter;

@Getter
public class DatabaseException extends Exception{
    private final ExceptionType exceptionType;

//    public DatabaseException(ExceptionType exceptionType) {
//        this.exceptionType = exceptionType;
//    }

    public DatabaseException(String recordId, ExceptionType exceptionType) {
        super(exceptionType.getMessage() + recordId);
        this.exceptionType = exceptionType;
    }

//    public DatabaseException(String message, Throwable cause, ExceptionType exceptionType) {
//        super(message, cause);
//        this.exceptionType = exceptionType;
//    }

    public DatabaseException(Throwable cause, ExceptionType exceptionType) {
        super(exceptionType.getMessage(), cause);
        this.exceptionType = exceptionType;
    }

    public String getErrorId() {
        return exceptionType.getId().toString();
    }
}
