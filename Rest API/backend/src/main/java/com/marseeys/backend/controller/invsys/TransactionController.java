package com.marseeys.backend.controller.invsys;

import com.marseeys.backend.entity.invsys.transaction.Transaction;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.invsys.transaction.TransactionInRequest;
import com.marseeys.backend.model.invsys.transaction.TransactionOutRequest;
import com.marseeys.backend.service.invsys.TransactionService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Retrieves all the transactions made on the inventory.",
            notes = "",
            response = Transaction.class,
            responseContainer = "List"
    )
    public ResponseEntity<List<Transaction>> getTransactions() {
        return ResponseEntity.ok(transactionService.getTransactions());
    }

    @PostMapping("/create/in")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a transaction and adds a specified quantity to an ingredient.",
            notes = "The inputted quantity should be positive and will always be added to the " +
                    "existing quantity of the ingredient.",
            response = Transaction.class
    )
    public ResponseEntity<Transaction> addToIngredient(@RequestBody @Valid TransactionInRequest transactionRequest) throws DatabaseException {
        return new ResponseEntity<>(transactionService.saveTransactionIn(transactionRequest), HttpStatus.CREATED);
    }

    @PostMapping("/create/out")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a transaction and deducts a specified quantity to an ingredient.",
            notes = "The inputted quantity should be positive and will always be deducted to the " +
                    "existing quantity of the ingredient.",
            response = Transaction.class
    )
    public ResponseEntity<Transaction> deductFromIngredient(@RequestBody @Valid TransactionOutRequest transactionRequest) throws DatabaseException {
        return new ResponseEntity<>(transactionService.saveTransactionOut(transactionRequest), HttpStatus.CREATED);
    }
}
