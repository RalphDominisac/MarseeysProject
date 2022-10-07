package com.marseeys.backend.service.possys;

import com.marseeys.backend.entity.possys.menu.Menu;
import com.marseeys.backend.entity.possys.order.Delivery;
import com.marseeys.backend.entity.possys.order.DineIn;
import com.marseeys.backend.entity.possys.order.PickUp;
import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.CalculationHelper;
import com.marseeys.backend.helper.DatabaseHelper;
import com.marseeys.backend.model.possys.order.*;
import com.marseeys.backend.repository.possys.DeliveryMethodRepository;
import com.marseeys.backend.repository.possys.OrderRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@AllArgsConstructor
public class OrderService {
    private final NextSequenceService nextSequenceService;
    private final OrderRepository orderRepository;
    private final DeliveryMethodRepository deliveryMethodRepository;
    private final DatabaseHelper databaseHelper;
    private final CalculationHelper calculationHelper;

    public DeliveryMethod saveDeliveryMethod(DeliveryMethodRequest deliveryMethodRequest) throws DatabaseException {
        try {
            DeliveryMethod method = new DeliveryMethod(
                    nextSequenceService.getNextSequence("DeliveryMethodSequence"),
                    deliveryMethodRequest.getName()
            );

            return deliveryMethodRepository.save(method);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_DELIVERY_METHOD_EXCEPTION
            );
        }
    }

    public List<DeliveryMethod> getMethods() {
        return deliveryMethodRepository.findAll();
    }

    public void deleteDeliveryMethod(DeliveryMethodRequest deliveryMethodRequest) throws DatabaseException {
        DeliveryMethod method = databaseHelper.findMethod(deliveryMethodRequest.getName());

        deliveryMethodRepository.delete(method);
    }

    public List<Order> getPendingOrders() {
        return orderRepository.findPendingOrders();
    }

    public Order saveOrder(DineInRequest dineInRequest) throws DatabaseException {
        List<Menu> contents = databaseHelper.checkContentsExist(dineInRequest.getContents());

        try {
            DineIn order = new DineIn(
                    nextSequenceService.getNextSequence("OrderSequence"),
                    dineInRequest.getCustomer(),
                    contents,
                    calculationHelper.getOrderTotal(contents),
                    dineInRequest.getTableNo()
            );

            return orderRepository.save(order);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_ORDER_EXCEPTION
            );
        }
    }

    public Order saveOrder(DeliveryRequest deliveryRequest) throws DatabaseException {
        List<Menu> contents = databaseHelper.checkContentsExist(deliveryRequest.getContents());

        try {
            Delivery order = new Delivery(
                    nextSequenceService.getNextSequence("OrderSequence"),
                    deliveryRequest.getCustomer(),
                    contents,
                    calculationHelper.getOrderTotal(contents),
                    deliveryRequest.getAddress(),
                    databaseHelper.findMethod(deliveryRequest.getDeliveryMethod())
            );

            return orderRepository.save(order);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_ORDER_EXCEPTION
            );
        }
    }

    public Order saveOrder(PickUpRequest pickUpRequest) throws DatabaseException {
        List<Menu> contents = databaseHelper.checkContentsExist(pickUpRequest.getContents());

        try {
            PickUp order = new PickUp(
                    nextSequenceService.getNextSequence("OrderSequence"),
                    pickUpRequest.getCustomer(),
                    contents,
                    calculationHelper.getOrderTotal(contents),
                    pickUpRequest.getPhoneNo(),
                    pickUpRequest.getEstimatedTime()
            );

            return orderRepository.save(order);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_ORDER_EXCEPTION
            );
        }
    }

    public Order editOrder(int id, EditOrderRequest editOrderRequest) throws DatabaseException {
        Order order = databaseHelper.findOrder(id);

        List<Menu> contents = databaseHelper.checkContentsExist(editOrderRequest.getContents());

        order.setCustomer(editOrderRequest.getCustomer());
        order.setContents(contents);
        order.setPrice(calculationHelper.getOrderTotal(contents));
        order.setDate(LocalDateTime.now());
        order.setPaid(editOrderRequest.isPaid());
        order.setServed(editOrderRequest.isServed());
        order.setCanceled(editOrderRequest.isCanceled());

        return orderRepository.save(order);
    }
}
