package com.marseeys.backend.controller.hrmsys;

import com.marseeys.backend.entity.hrmsys.employee.Shift;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.hrmsys.employee.ShiftRequest;
import com.marseeys.backend.service.hrmsys.ShiftService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/shifts")
@AllArgsConstructor
public class ShiftController {
    private final ShiftService shiftService;

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<List<Shift>> getShifts() {
        return ResponseEntity.ok(shiftService.getShifts());
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Shift> saveShift(@RequestBody @Valid ShiftRequest shiftRequest) throws DatabaseException {
        return new ResponseEntity<>(shiftService.saveShift(shiftRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteShift(@PathVariable int id) throws DatabaseException {
        shiftService.deleteShift(id);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
