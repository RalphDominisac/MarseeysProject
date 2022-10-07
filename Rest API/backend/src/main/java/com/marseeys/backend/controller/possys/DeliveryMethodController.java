package com.marseeys.backend.controller.possys;


import com.marseeys.backend.entity.possys.order.base.DeliveryMethod;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.possys.order.DeliveryMethodRequest;
import com.marseeys.backend.service.possys.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<DeliveryMethod>> getDeliveryMethods() {
        return ResponseEntity.ok(orderService.getMethods());
    }

    @PostMapping("/add")
    public ResponseEntity<DeliveryMethod> saveDeliveryMethod(@RequestBody @Valid DeliveryMethodRequest deliveryMethodRequest) throws DatabaseException {
        return new ResponseEntity<>(orderService.saveDeliveryMethod(deliveryMethodRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete")
    public ResponseEntity<String> deleteDeliveryMethod(@RequestBody @Valid DeliveryMethodRequest deliveryMethodRequest) throws DatabaseException {
        orderService.deleteDeliveryMethod(deliveryMethodRequest);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
