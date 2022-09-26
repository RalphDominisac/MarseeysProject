package com.marseeys.inventory.types;

import lombok.Getter;

@Getter
public enum ExceptionType {
    SAVE_INGREDIENT_EXCEPTION(
            40001L,
            "Unable to save ingredient."
    ),

    INGREDIENT_NOT_FOUND_EXCEPTION(
            40002L,
            "No ingredient found: "
    ),

    INGREDIENT_ALREADY_DELETED_EXCEPTION(
            40003L,
            "Ingredient already deleted: "
    ),

    SAVE_TRANSACTION_EXCEPTION(
            50001L,
            "Unable to save transaction."
    )
    ;
    private final Long id;
    private final String message;

    ExceptionType(Long id, String message) {
        this.id = id;
        this.message = message;
    }
}
