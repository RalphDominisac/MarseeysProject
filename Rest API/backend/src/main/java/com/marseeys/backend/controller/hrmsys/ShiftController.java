package com.marseeys.backend.controller.hrmsys;

import com.marseeys.backend.service.hrmsys.ShiftService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/shifts")
@AllArgsConstructor
public class ShiftController {
    private final ShiftService shiftService;


}
