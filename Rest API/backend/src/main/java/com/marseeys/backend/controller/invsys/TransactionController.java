package com.marseeys.backend.controller.invsys;

import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.entity.invsys.transaction.TransactionIn;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.invsys.transaction.TransactionInRequest;
import com.marseeys.backend.model.invsys.transaction.TransactionOutRequest;
import com.marseeys.backend.service.invsys.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/v1/transactions")
@AllArgsConstructor
public class TransactionController {
    private TransactionService transactionService;

    @GetMapping()
    public ResponseEntity<List<TransactionIn>> getTransactions() {
        return ResponseEntity.ok(transactionService.getTransactions());
    }

    @PostMapping("/create/in")
    public ResponseEntity<Transaction> addToIngredient(@RequestBody @Valid TransactionInRequest transactionRequest) throws DatabaseException {
        return new ResponseEntity<>(transactionService.saveTransactionIn(transactionRequest), HttpStatus.CREATED);
    }

    @PostMapping("/create/out")
    public ResponseEntity<Transaction> deductFromIngredient(@RequestBody @Valid TransactionOutRequest transactionRequest) throws DatabaseException {
        return new ResponseEntity<>(transactionService.saveTransactionOut(transactionRequest), HttpStatus.CREATED);
    }
}
