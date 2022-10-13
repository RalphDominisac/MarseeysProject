package com.marseeys.backend.controller.possys;

import com.marseeys.backend.entity.possys.payment.BankTransfer;
import com.marseeys.backend.entity.possys.payment.Cash;
import com.marseeys.backend.entity.possys.payment.Credit;
import com.marseeys.backend.entity.possys.payment.DigitalWallet;
import com.marseeys.backend.exception.CashException;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.model.possys.payment.BankTransferRequest;
import com.marseeys.backend.model.possys.payment.CashRequest;
import com.marseeys.backend.model.possys.payment.CreditRequest;
import com.marseeys.backend.model.possys.payment.DigitalWalletRequest;
import com.marseeys.backend.service.possys.CashService;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("api/v1/pay")
@AllArgsConstructor
public class CashController {
    private final CashService cashService;

    @PostMapping("/cash")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a payment for a specific order using cash.",
            notes = "Refer to the order using its id.",
            response = Cash.class
    )
    public ResponseEntity<Cash> saveCash(@RequestBody @Valid CashRequest CashRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(CashRequest), HttpStatus.CREATED);
    }

    @PostMapping("/credit")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a payment for a specific order using a credit card.",
            notes = "Refer to the order using its id.",
            response = Credit.class
    )
    public ResponseEntity<Cash> saveCash(@RequestBody @Valid CreditRequest creditRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(creditRequest), HttpStatus.CREATED);
    }

    @PostMapping("/bank")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a payment for a specific order using a bank transfer.",
            notes = "Refer to the order using its id.",
            response = BankTransfer.class
    )
    public ResponseEntity<Cash> saveCash(@RequestBody @Valid BankTransferRequest bankTransferRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(bankTransferRequest), HttpStatus.CREATED);
    }

    @PostMapping("/e-wallet")
//    @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
    @ApiOperation(
            value = "Creates a payment for a specific order using digital wallets.",
            notes = "Refer to the order using its id.",
            response = DigitalWallet.class
    )
    public ResponseEntity<Cash> saveCash(@RequestBody @Valid DigitalWalletRequest digitalWalletRequest) throws DatabaseException, CashException {
        return new ResponseEntity<>(cashService.saveCash(digitalWalletRequest), HttpStatus.CREATED);
    }
}
