package com.example.marpos.service;

import com.example.marpos.dto.order.*;
import com.example.marpos.entity.item.Item;
import com.example.marpos.entity.order.Delivery;
import com.example.marpos.entity.order.DineIn;
import com.example.marpos.entity.order.Order;
import com.example.marpos.entity.order.PickUp;
import com.example.marpos.exception.order.OrderNotFoundException;
import com.example.marpos.repository.ItemRepository;
import com.example.marpos.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Service
public class OrderService {
    private OrderRepository orderRepository;
    private ItemRepository itemRepository;
    private NextSequenceService nextSequenceService;

    //  getPendingOrders - done
    //  saveOrder - done
    //  editOrder - done

    public List<Order> getPendingOrders() {
        return orderRepository.findPendingOrders();
    }

    public Order saveOrder(DineInRequest dineInRequest) {
        try {
            double total = 0;
            List<Item> items = (List<Item>) itemRepository.findAllById(dineInRequest.getContents());

            // Getting total price
            for (Item item : items) {
                total += item.getPrice();
            }

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
        } catch(Exception ex) {
            nextSequenceService.getPrevSequence("OrderSequence");
            throw ex;
        }
    }

    public Order saveOrder(DeliveryRequest deliveryRequest) {
        try {
            double total = 0;
            List<Item> items = (List<Item>) itemRepository.findAllById(deliveryRequest.getContents());

            // Getting total price
            for (Item item : items) {
                total += item.getPrice();
            }

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
        } catch(Exception ex) {
            nextSequenceService.getPrevSequence("OrderSequence");
            throw ex;
        }
    }

    public Order saveOrder(PickUpRequest pickUpRequest) {
        try {
            double total = 0;
            List<Item> items = (List<Item>) itemRepository.findAllById(pickUpRequest.getContents());

            // Getting total price
            for (Item item : items) {
                total += item.getPrice();
            }

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
                    pickUpRequest.getEstimatedTime()
            );
            return orderRepository.save(order);
        } catch(Exception ex) {
            nextSequenceService.getPrevSequence("OrderSequence");
            throw ex;
        }
    }

    public Order editOrder(int id, EditOrderRequest editOrderRequest) throws OrderNotFoundException {
        Order order = orderRepository.findById(id).orElseThrow(() -> new OrderNotFoundException(id));

        order.setCustomer(editOrderRequest.getCustomer());
        order.setContents(editOrderRequest.getContents());
        order.setPaid(editOrderRequest.isPaid());
        order.setServed(editOrderRequest.isServed());
        order.setCanceled(editOrderRequest.isCanceled());

        return orderRepository.save(order);
    }
}
