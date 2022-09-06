package com.example.marpos.service;

import com.example.marpos.dto.order.EditOrderRequest;
import com.example.marpos.dto.order.OrderRequest;
import com.example.marpos.entity.item.Item;
import com.example.marpos.entity.order.Order;
import com.example.marpos.exception.order.OrderNotFoundException;
import com.example.marpos.repository.OrderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@Service
public class OrderService {
    private OrderRepository orderRepository;
    private NextSequenceService nextSequenceService;

    //  getPendingOrders - done
    //  saveOrder - done
    //  editOrder - done

    public List<Order> getPendingOrders() {
        return orderRepository.findPendingOrders();
    }

    public Order saveOrder(OrderRequest orderRequest) {
        try {
            Order order = Order.build(
                    nextSequenceService.getNextSequence("OrderSequence"),
                    orderRequest.getCustomer(),
                    orderRequest.getContents(),
                    orderRequest.getContents().stream().mapToDouble(Item::getPrice).sum(),
                    LocalDateTime.now(),
                    false,
                    false,
                    false
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
