package com.example.marpos.controller;

import com.example.marpos.dto.payment.BankTransferRequest;
import com.example.marpos.dto.payment.CreditRequest;
import com.example.marpos.dto.payment.DigitalWalletRequest;
import com.example.marpos.dto.payment.PaymentRequest;
import com.example.marpos.entity.payment.Payment;
import com.example.marpos.exception.order.OrderNotFoundException;
import com.example.marpos.exception.payment.InsufficientAmountException;
import com.example.marpos.exception.payment.OrderAlreadyPaidException;
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
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid PaymentRequest paymentRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        return new ResponseEntity<>(paymentService.savePayment(paymentRequest), HttpStatus.CREATED);
    }

    @PostMapping("/credit")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid CreditRequest creditRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        return new ResponseEntity<>(paymentService.savePayment(creditRequest), HttpStatus.CREATED);
    }

    @PostMapping("/bank")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid BankTransferRequest bankTransferRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        return new ResponseEntity<>(paymentService.savePayment(bankTransferRequest), HttpStatus.CREATED);
    }

    @PostMapping("/e-wallet")
    public ResponseEntity<Payment> saveOrder(@RequestBody @Valid DigitalWalletRequest digitalWalletRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        return new ResponseEntity<>(paymentService.savePayment(digitalWalletRequest), HttpStatus.CREATED);
    }
}
