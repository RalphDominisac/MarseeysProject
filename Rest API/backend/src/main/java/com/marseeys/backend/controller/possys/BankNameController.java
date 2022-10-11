package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.payment.BankName;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.possys.payment.BankNameRequest;
import com.marseeys.backend.service.possys.CashService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/v1/banks")
@AllArgsConstructor
public class BankNameController {
    private final CashService cashService;

    @GetMapping()
    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<List<BankName>> getBanks() {
        return ResponseEntity.ok(cashService.getBankNames());
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<BankName> saveBank(@RequestBody @Valid BankNameRequest bankNameRequest) throws DatabaseException {
        return new ResponseEntity<>(cashService.saveBankName(bankNameRequest), HttpStatus.CREATED);
    }

    @PostMapping("/delete")
    @PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
    public ResponseEntity<String> deleteBank(@RequestBody @Valid BankNameRequest bankNameRequest) throws DatabaseException {
        cashService.deleteBankName(bankNameRequest);
        return ResponseEntity.ok("Successfully deleted!");
    }
}
