package com.marseeys.inventory.controller;

import com.marseeys.inventory.entity.transaction.Transaction;
import com.marseeys.inventory.exception.DatabaseException;
import com.marseeys.inventory.model.transaction.TransactionRequest;
import com.marseeys.inventory.service.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/transaction")    // Port 8080
@AllArgsConstructor
public class TransactionController {
    private TransactionService transactionService;

    @GetMapping("/")
    public ResponseEntity<List<Transaction>> getTransactions() {
        return ResponseEntity.ok(transactionService.getTransactions());
    }

    @PostMapping("/create")
    public ResponseEntity<Transaction> createTransaction(@RequestBody @Valid TransactionRequest transactionRequest) throws DatabaseException {
        return new ResponseEntity<>(transactionService.saveTransaction(transactionRequest), HttpStatus.CREATED);
    }
}
