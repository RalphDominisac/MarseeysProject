package com.example.marpos.service;

import com.example.marpos.entity.item.Item;
import com.example.marpos.entity.order.Delivery;
import com.example.marpos.entity.order.DineIn;
import com.example.marpos.entity.order.Order;
import com.example.marpos.entity.order.PickUp;
import com.example.marpos.exception.DatabaseException;
import com.example.marpos.helper.DatabaseHelper;
import com.example.marpos.model.order.DeliveryRequest;
import com.example.marpos.model.order.DineInRequest;
import com.example.marpos.model.order.EditOrderRequest;
import com.example.marpos.model.order.PickUpRequest;
import com.example.marpos.repository.ItemRepository;
import com.example.marpos.repository.OrderRepository;
import com.example.marpos.types.ExceptionTypeEnum;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@AllArgsConstructor
@Service
public class OrderService {
    private OrderRepository orderRepository;
    private ItemRepository itemRepository;
    private NextSequenceService nextSequenceService;
    private DatabaseHelper databaseHelper;

    public List<Order> getPendingOrders() {
        return orderRepository.findPendingOrders();
    }

    /**
     * Creates an order document using the DineIn class.
     * @param dineInRequest DineInRequest
     * @return created Order
     * @throws DatabaseException 10001L
     */
    public Order saveOrder(DineInRequest dineInRequest) throws DatabaseException {
        List<Integer> itemIds = dineInRequest.getContents();
        List<Item> items = databaseHelper.checkItemsExist(itemIds, itemRepository);
        double total = databaseHelper.getOrderTotal(items);

        try {
            DineIn order = new DineIn(
                    nextSequenceService.getNextSequence("OrderSequence"),
                    dineInRequest.getCustomer(),
                    items,
                    total,
                    LocalDateTime.now(),
                    false,
                    false,
                    false,
                    dineInRequest.getTableNo()
            );
            return orderRepository.save(order);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionTypeEnum.SAVE_ORDER_EXCEPTION
            );
        }
    }

    /**
     * Creates an order document using the Delivery class.
     * @param deliveryRequest DeliveryRequest
     * @return created Order
     * @throws DatabaseException 10001L
     */
    public Order saveOrder(DeliveryRequest deliveryRequest) throws DatabaseException {
        List<Integer> itemIds = deliveryRequest.getContents();
        List<Item> items = databaseHelper.checkItemsExist(itemIds, itemRepository);
        double total = databaseHelper.getOrderTotal(items);

        try {
            Delivery order = new Delivery(
                    nextSequenceService.getNextSequence("OrderSequence"),
                    deliveryRequest.getCustomer(),
                    items,
                    total,
                    LocalDateTime.now(),
                    false,
                    false,
                    false,
                    deliveryRequest.getAddress(),
                    deliveryRequest.getMethod()
            );

            return orderRepository.save(order);
        } catch (Exception ex) {
            throw new DatabaseException(
                ex,
                ExceptionTypeEnum.SAVE_ORDER_EXCEPTION
            );
        }
    }

    /**
     * Creates an order document using the PickUp class.
     * @param pickUpRequest PickUpRequest
     * @return created Order
     * @throws DatabaseException 10001L
     */
    public Order saveOrder(PickUpRequest pickUpRequest) throws DatabaseException {
        List<Integer> itemIds = pickUpRequest.getContents();
        List<Item> items = databaseHelper.checkItemsExist(itemIds, itemRepository);
        double total = databaseHelper.getOrderTotal(items);

        try {
            PickUp order = new PickUp(
                nextSequenceService.getNextSequence("OrderSequence"),
                pickUpRequest.getCustomer(),
                items,
                total,
                LocalDateTime.now(),
                false,
                false,
                false,
                pickUpRequest.getPhoneNo(),
                pickUpRequest.getEstimatedTime().minusMinutes(LocalTime.now().getMinute())
            );

            return orderRepository.save(order);
        } catch (Exception ex) {
            throw new DatabaseException(
                ex,
                ExceptionTypeEnum.SAVE_ORDER_EXCEPTION
            );
        }
    }

    /**
     * Overwrites an order document with the specified id.
     * @param id Integer
     * @param editOrderRequest EditOrderRequest
     * @return edited Order
     * @throws DatabaseException 20002L
     */
    public Order editOrder(int id, EditOrderRequest editOrderRequest) throws DatabaseException {
        Order order = orderRepository.findById(id).orElseThrow(() -> new DatabaseException(
            String.valueOf(id),
            ExceptionTypeEnum.ORDER_NOT_FOUND_EXCEPTION
        ));
        List<Integer> itemIds = editOrderRequest.getContents();
        List<Item> items = databaseHelper.checkItemsExist(itemIds, itemRepository);

        order.setCustomer(editOrderRequest.getCustomer());
        order.setContents(items);
        order.setPrice(databaseHelper.getOrderTotal(items));
        order.setDate(LocalDateTime.now());
        order.setPaid(editOrderRequest.isPaid());
        order.setServed(editOrderRequest.isServed());
        order.setCanceled(editOrderRequest.isCanceled());

        return orderRepository.save(order);
    }
}
