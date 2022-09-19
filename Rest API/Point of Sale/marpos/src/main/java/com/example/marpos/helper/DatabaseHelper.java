package com.example.marpos.helper;

import com.example.marpos.entity.item.Item;
import com.example.marpos.entity.order.Order;
import com.example.marpos.exception.DatabaseException;
import com.example.marpos.exception.PaymentException;
import com.example.marpos.repository.ItemRepository;
import com.example.marpos.types.ExceptionTypeEnum;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DatabaseHelper {
    /**
     * Checks if the list of items exist in the collection.
     * @param itemIds List of Integers
     * @param itemRepository MongoRepository
     * @return list of items from the collection
     * @throws DatabaseException 10002L
     */
    public List<Item> checkItemsExist(List<Integer> itemIds, ItemRepository itemRepository) throws DatabaseException {
        List<Item> items = new ArrayList<>();

        for (Integer itemId : itemIds) {
            if (itemRepository.findItem(itemId).isEmpty()) {
                throw new DatabaseException(
                        itemId.toString(),
                        ExceptionTypeEnum.ITEM_NOT_FOUND_EXCEPTION
                );
            }

            items.add(itemRepository.returnNotOptional(itemId));
        }

        return items;
    }

    /**
     * Calculates the total price of the items.
     * @param items List of Items
     * @return total amount
     */
    public double getOrderTotal(List<Item> items) {
        double total = 0;

        for (Item item : items) {
            total += item.getPrice();
        }

        return total;
    }

    /**
     *
     * @param order Order
     * @param change double
     * @throws PaymentException 30001L, 30002L
     */
    public void paymentErrorCheck(Order order, double change) throws PaymentException {
        if (order.isPaid()) throw new PaymentException(
                String.valueOf(order.getOrderId()),
                ExceptionTypeEnum.PAYMENT_ALREADY_MADE_EXCEPTION
        );

        if (change < 0) throw new PaymentException(
                ExceptionTypeEnum.PAYMENT_INSUFFICIENT_EXCEPTION
        );
    }
}
