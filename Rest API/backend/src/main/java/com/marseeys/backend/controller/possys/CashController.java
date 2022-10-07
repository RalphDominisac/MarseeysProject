package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.payment.Cash;
import com.marseeys.backend.exception.CashException;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.possys.payment.BankTransferRequest;
import com.marseeys.backend.model.possys.payment.CashRequest;
import com.marseeys.backend.model.possys.payment.CreditRequest;
import com.marseeys.backend.model.possys.payment.DigitalWalletRequest;
import com.marseeys.backend.service.possys.CashService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/v1/pay")
@AllArgsConstructor
public class CashController {
    private final CashService cashService;

    @PostMapping("/cash")
    public ResponseEntity<Cash> saveOrder(@RequestBody @Valid CashRequest CashRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(CashRequest), HttpStatus.CREATED);
    }

    @PostMapping("/credit")
    public ResponseEntity<Cash> saveOrder(@RequestBody @Valid CreditRequest creditRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(creditRequest), HttpStatus.CREATED);
    }

    @PostMapping("/bank")
    public ResponseEntity<Cash> saveOrder(@RequestBody @Valid BankTransferRequest bankTransferRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(bankTransferRequest), HttpStatus.CREATED);
    }

    @PostMapping("/e-wallet")
    public ResponseEntity<Cash> saveOrder(@RequestBody @Valid DigitalWalletRequest digitalWalletRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(digitalWalletRequest), HttpStatus.CREATED);
    }
}
