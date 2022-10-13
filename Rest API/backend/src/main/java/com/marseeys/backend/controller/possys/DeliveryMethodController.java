package com.marseeys.backend.controller.possys;


import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.possys.order.DeliveryMethodRequest;
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
@RequestMapping("api/v1/delivery/methods")
@AllArgsConstructor
public class DeliveryMethodController {
    private final OrderService orderService;

    @GetMapping()
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the delivery methods for deliveries.",
            notes = "Only returns objects containing names as the current version does not cater to storing " +
                    "delivery methods as more complex objects.",
            response = DeliveryMethod.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<DeliveryMethod>> getDeliveryMethods() {
        return ResponseEntity.ok(orderService.getMethods());
    }

    @PostMapping("/add")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Adds a delivery method to the registered list of delivery methods.",
            notes = "",
            response = DeliveryMethod.class
    )
    public ResponseEntity<DeliveryMethod> saveDeliveryMethod(@RequestBody @Valid DeliveryMethodRequest deliveryMethodRequest) throws DatabaseException {
        return new ResponseEntity<>(orderService.saveDeliveryMethod(deliveryMethodRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete")
//    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Deletes a registered delivery method from the database.",
            notes = "",
            response = String.class
    )
    public ResponseEntity<String> deleteDeliveryMethod(@RequestBody @Valid DeliveryMethodRequest deliveryMethodRequest) throws DatabaseException {
        orderService.deleteDeliveryMethod(deliveryMethodRequest);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
