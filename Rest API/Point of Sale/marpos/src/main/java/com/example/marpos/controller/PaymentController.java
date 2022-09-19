package com.example.marpos.controller;

import com.example.marpos.entity.payment.Payment;
import com.example.marpos.exception.DatabaseException;
import com.example.marpos.exception.PaymentException;
import com.example.marpos.model.payment.BankTransferRequest;
import com.example.marpos.model.payment.CreditRequest;
import com.example.marpos.model.payment.DigitalWalletRequest;
import com.example.marpos.model.payment.PaymentRequest;
import com.example.marpos.service.PaymentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/v1/pay")
@AllArgsConstructor
public class PaymentController {

    //  savePayment(Cash, BankTransfer, Credit, DigitalWallet) - done

    private final PaymentService paymentService;

    @PostMapping("/cash")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid PaymentRequest paymentRequest) throws DatabaseException, PaymentException {
        return new ResponseEntity<>(paymentService.savePayment(paymentRequest), HttpStatus.CREATED);
    }

    @PostMapping("/credit")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid CreditRequest creditRequest) throws DatabaseException, PaymentException {
        return new ResponseEntity<>(paymentService.savePayment(creditRequest), HttpStatus.CREATED);
    }

    @PostMapping("/bank")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid BankTransferRequest bankTransferRequest) throws DatabaseException, PaymentException {
        return new ResponseEntity<>(paymentService.savePayment(bankTransferRequest), HttpStatus.CREATED);
    }

    @PostMapping("/e-wallet")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid DigitalWalletRequest digitalWalletRequest) throws DatabaseException, PaymentException {
        return new ResponseEntity<>(paymentService.savePayment(digitalWalletRequest), HttpStatus.CREATED);
    }
}
