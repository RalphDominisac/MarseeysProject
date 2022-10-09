package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.exception.OrderExecption;
import com.marseeys.backend.model.possys.order.DeliveryRequest;
import com.marseeys.backend.model.possys.order.DineInRequest;
import com.marseeys.backend.model.possys.order.AdditionalOrderRequest;
import com.marseeys.backend.model.possys.order.PickUpRequest;
import com.marseeys.backend.service.possys.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/v1/orders")
@AllArgsConstructor
public class OrderController {
    private final OrderService orderService;

    @GetMapping()
    public ResponseEntity<List<Order>> getPendingOrders() {
        return ResponseEntity.ok(orderService.getPendingOrders());
    }

    @PostMapping("/add/dine")
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid DineInRequest dineInRequest) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(orderService.saveOrder(dineInRequest), HttpStatus.CREATED);
    }

    @PostMapping("/add/delivery")
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid DeliveryRequest deliveryRequest) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(orderService.saveOrder(deliveryRequest), HttpStatus.CREATED);
    }

    @PostMapping("/add/pickup")
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid PickUpRequest pickUpRequest) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(orderService.saveOrder(pickUpRequest), HttpStatus.CREATED);
    }

    @PostMapping("/{id}/additional")
    public ResponseEntity<Order> addToOrder(@PathVariable int id, @RequestBody @Valid AdditionalOrderRequest additionalOrderRequest) throws DatabaseException, OrderExecption, IngredientException {
        return ResponseEntity.ok(orderService.editOrder(id, additionalOrderRequest));
    }

    @PostMapping("/{id}/serve")
    public ResponseEntity<Order> serveOrder(@PathVariable int id) throws DatabaseException, OrderExecption {
        return ResponseEntity.ok(orderService.serveOrder(id));
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<Order> cancelOrder(@PathVariable int id) throws DatabaseException, OrderExecption {
        return ResponseEntity.ok(orderService.cancelOrder(id));
    }
}
