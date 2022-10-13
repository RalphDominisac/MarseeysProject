package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.order.Delivery;
import com.marseeys.backend.entity.possys.order.DineIn;
import com.marseeys.backend.entity.possys.order.PickUp;
import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.exception.IngredientException;
import com.marseeys.backend.exception.OrderExecption;
import com.marseeys.backend.model.possys.order.AdditionalOrderRequest;
import com.marseeys.backend.model.possys.order.DeliveryRequest;
import com.marseeys.backend.model.possys.order.DineInRequest;
import com.marseeys.backend.model.possys.order.PickUpRequest;
import com.marseeys.backend.service.possys.OrderService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the pending orders.",
            notes = "Pending orders are orders that are not both served and paid " +
                    "for yet. This will not include canceled orders.",
            response = Order.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<Order>> getPendingOrders() {
        return ResponseEntity.ok(orderService.getPendingOrders());
    }

    @PostMapping("/add/dine")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a dine in order based on the given object.",
            notes = "In adding menu items to the order contents, please follow the " +
                    "format: {'id': quantity}",
            response = DineIn.class
    )
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid DineInRequest dineInRequest) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(orderService.saveOrder(dineInRequest), HttpStatus.CREATED);
    }

    @PostMapping("/add/delivery")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a delivery order based on the given object.",
            notes = "In adding menu items to the order contents, please follow the " +
                    "format: {'id': quantity}",
            response = Delivery.class
    )
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid DeliveryRequest deliveryRequest) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(orderService.saveOrder(deliveryRequest), HttpStatus.CREATED);
    }

    @PostMapping("/add/pickup")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a dine in order based on the given object.",
            notes = "In adding menu items to the order contents, please follow the " +
                    "format: {'id': quantity}",
            response = PickUp.class
    )
    public ResponseEntity<Order> saveOrder(@RequestBody @Valid PickUpRequest pickUpRequest) throws DatabaseException, IngredientException {
        return new ResponseEntity<>(orderService.saveOrder(pickUpRequest), HttpStatus.CREATED);
    }

    @PostMapping("/{id}/additional")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Adds additional menu items to an order.",
            notes = "This only works for dine in orders as customers do not always " +
                    "order once when dining in. This will also mark the current order " +
                    "as not paid and served.",
            response = DineIn.class
    )
    public ResponseEntity<Order> addToOrder(@PathVariable int id, @RequestBody @Valid AdditionalOrderRequest additionalOrderRequest) throws DatabaseException, OrderExecption, IngredientException {
        return ResponseEntity.ok(orderService.editOrder(id, additionalOrderRequest));
    }

    @PostMapping("/{id}/serve")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Marks an order as served.",
            notes = "",
            response = Order.class
    )
    public ResponseEntity<Order> serveOrder(@PathVariable int id) throws DatabaseException, OrderExecption {
        return ResponseEntity.ok(orderService.serveOrder(id));
    }

    @PostMapping("/{id}/cancel")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Marks an order as canceled.",
            notes = "This will not revert the used ingredients in the inventory.",
            response = Order.class
    )
    public ResponseEntity<Order> cancelOrder(@PathVariable int id) throws DatabaseException, OrderExecption {
        return ResponseEntity.ok(orderService.cancelOrder(id));
    }
}
