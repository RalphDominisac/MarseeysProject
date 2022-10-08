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

    INSUFFICIENT_INGREDIENTS_EXCEPTION(
            40004L,
            "Not enough ingredients for this order."
    ),

    SAVE_TRANSACTION_EXCEPTION(
            50001L,
            "Unable to save transaction."
    ),

    SAVE_MENU_EXCEPTION(
            60001L,
                    "Unable to save item."
    ),

    MENU_NOT_FOUND_EXCEPTION(
            60002L,
                    "No item found: "
    ),

    EMPTY_MENU_CATEGORY_EXCEPTION(
            60003L,
                    "Category is empty: "
    ),

    MENU_ALREADY_DELETED_EXCEPTION(
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

    ORDER_ALREADY_SERVED_EXCEPTION(
            70003L,
            "Order already served: "
    ),

    SAVE_PAYMENT_EXCEPTION(
            80001L,
            "Unable to save order."
    ),

    PAYMENT_ALREADY_MADE_EXCEPTION(
            80002L,
                    "Order already paid: "
    ),

    PAYMENT_INSUFFICIENT_EXCEPTION(
            80003L,
                    "Insufficient amount paid."
    ),

    SAVE_MENU_CATEGORY_EXCEPTION(
            90001L,
            "Unable to save menu category."
    ),

    MENU_CATEGORY_NOT_FOUND_EXCEPTION(
            90002L,
            "Menu category not found: "
    ),

    SAVE_DELIVERY_METHOD_EXCEPTION(
            100001L,
            "Unable to save delivery method."
    ),

    DELIVERY_METHOD_NOT_FOUND_EXCEPTION(
            100002L,
            "Delivery method not found: "
    ),

    SAVE_BANK_NAME_EXCEPTION(
            110001L,
            "Unable to save bank name."
    ),

    BANK_NAME_NOT_FOUND_EXCEPTION(
            110002L,
            "Bank name not found: "
    ),

    SAVE_INGREDIENT_CATEGORY_EXCEPTION(
            120001L,
            "Unable to save ingredient category."
    ),

    INGREDIENT_CATEGORY_NOT_FOUND_EXCEPTION(
            120002L,
            "Ingredient category not found: "
    );
    private final Long id;
    private final String message;

    ExceptionType(long id, String message) {
        this.id = id;
        this.message = message;
    }
}
