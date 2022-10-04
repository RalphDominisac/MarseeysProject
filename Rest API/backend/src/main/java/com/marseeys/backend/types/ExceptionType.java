package com.marseeys.backend.types;

import lombok.Getter;

@Getter
public enum ExceptionType {
    SAVE_USER_EXCEPTION(
            10001L,
            "Unable to save user."
    ),

    USER_NOT_FOUND_EXCEPTION(
            10002L,
            "Username not found: "
    ),

    USER_ALREADY_DELETED(
            10003L,
            "User is already deleted: "
    ),

    SAVE_ROLE_EXCEPTION(
            20001L,
            "Unable to save role."
    ),

    ROLE_NOT_FOUND_EXCEPTION(
            20002L,
            "Role not found: "
    ),

    SAVE_DEPARTMENT_EXCEPTION(
            30001L,
            "Unable to save department."
    ),

    DEPARTMENT_NOT_FOUND_EXCEPTION(
            30002L,
            "Department not found: "
    ),

    DEPARTMENT_ALREADY_DELETED(
            30003L,
            "Department is already deleted: "
    ),

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
    ),

    SAVE_ITEM_EXCEPTION(
            60001L,
                    "Unable to save item."
    ),

    ITEM_NOT_FOUND_EXCEPTION(
            60002L,
                    "No item found: "
    ),

    EMPTY_ITEM_CATEGORY_EXCEPTION(
            60003L,
                    "Category is empty: "
    ),

    ITEM_ALREADY_DELETED_EXCEPTION(
            60004L,
                    "Item already deleted: "
    ),

    SAVE_ORDER_EXCEPTION(
            70001L,
                    "Unable to save order."
    ),

    ORDER_NOT_FOUND_EXCEPTION(
            70002L,
                    "No order found: "
    ),

    PAYMENT_ALREADY_MADE_EXCEPTION(
            70001L,
                    "Order already paid: "
    ),

    PAYMENT_INSUFFICIENT_EXCEPTION(
            80002L,
                    "Insufficient amount paid."
    );
    private final Long id;
    private final String message;

    ExceptionType(long id, String message) {
        this.id = id;
        this.message = message;
    }
}
