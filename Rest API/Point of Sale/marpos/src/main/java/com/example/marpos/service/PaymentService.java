package com.example.marpos.service;

import com.example.marpos.dto.payment.BankTransferRequest;
import com.example.marpos.dto.payment.CreditRequest;
import com.example.marpos.dto.payment.DigitalWalletRequest;
import com.example.marpos.dto.payment.PaymentRequest;
import com.example.marpos.entity.order.Order;
import com.example.marpos.entity.payment.BankTransfer;
import com.example.marpos.entity.payment.Credit;
import com.example.marpos.entity.payment.DigitalWallet;
import com.example.marpos.entity.payment.Payment;
import com.example.marpos.exception.order.OrderNotFoundException;
import com.example.marpos.exception.payment.InsufficientAmountException;
import com.example.marpos.exception.payment.OrderAlreadyPaidException;
import com.example.marpos.repository.OrderRepository;
import com.example.marpos.repository.PaymentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class PaymentService {
    private PaymentRepository paymentRepository;
    private OrderRepository orderRepository;
    private NextSequenceService nextSequenceService;

    //  savePayment(Cash, Credit, BankTransfer, DigitalWallet) - done

    public Payment savePayment(PaymentRequest paymentRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        double change;
        Order order = orderRepository.findById(paymentRequest.getOrderId()).orElseThrow(() -> new OrderNotFoundException(paymentRequest.getOrderId()));
        change = paymentRequest.getAmount() - order.getPrice();

        if(order.isPaid()) throw new OrderAlreadyPaidException(paymentRequest.getOrderId());
        if(change < 0) throw new InsufficientAmountException();

        try {
            Payment payment = new Payment(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    paymentRequest.getAmount(),
                    change
            );

            order.setPaid(true);
            orderRepository.save(order);

            return paymentRepository.save(payment);
        } catch (Exception ex) {
            nextSequenceService.getPrevSequence("PaymentSequence");
            throw ex;
        }
    }

    public Payment savePayment(CreditRequest creditRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        double change;
        Order order = orderRepository.findById(creditRequest.getOrderId()).orElseThrow(() -> new OrderNotFoundException(creditRequest.getOrderId()));
        change = creditRequest.getAmount() - order.getPrice();

        if(order.isPaid()) throw new OrderAlreadyPaidException(creditRequest.getOrderId());
        if(change < 0) throw new InsufficientAmountException();

        try {
            Payment payment = new Credit(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    creditRequest.getAmount(),
                    change,
                    creditRequest.getCardNo()
            );

            order.setPaid(true);
            orderRepository.save(order);

            return paymentRepository.save(payment);
        } catch (Exception ex) {
            nextSequenceService.getPrevSequence("PaymentSequence");
            throw ex;
        }
    }

    public Payment savePayment(BankTransferRequest bankTransferRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        double change;
        Order order = orderRepository.findById(bankTransferRequest.getOrderId()).orElseThrow(() -> new OrderNotFoundException(bankTransferRequest.getOrderId()));
        change = bankTransferRequest.getAmount() - order.getPrice();

        if(order.isPaid()) throw new OrderAlreadyPaidException(bankTransferRequest.getOrderId());
        if(change < 0) throw new InsufficientAmountException();

        try {
            Payment payment = new BankTransfer(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    bankTransferRequest.getAmount(),
                    change,
                    bankTransferRequest.getAccountNo(),
                    bankTransferRequest.getBankName(),
                    bankTransferRequest.getContactNo()
            );

            order.setPaid(true);
            orderRepository.save(order);

            return paymentRepository.save(payment);
        } catch (Exception ex) {
            nextSequenceService.getPrevSequence("PaymentSequence");
            throw ex;
        }
    }

    public Payment savePayment(DigitalWalletRequest digitalWalletRequest) throws OrderNotFoundException, InsufficientAmountException, OrderAlreadyPaidException {
        double change;
        Order order = orderRepository.findById(digitalWalletRequest.getOrderId()).orElseThrow(() -> new OrderNotFoundException(digitalWalletRequest.getOrderId()));
        change = digitalWalletRequest.getAmount() - order.getPrice();

        if(order.isPaid()) throw new OrderAlreadyPaidException(digitalWalletRequest.getOrderId());
        if(change < 0) throw new InsufficientAmountException();

        try {
            Payment payment = new DigitalWallet(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    digitalWalletRequest.getAmount(),
                    change,
                    digitalWalletRequest.getMobileNo()
            );

            order.setPaid(true);
            orderRepository.save(order);

            return paymentRepository.save(payment);
        } catch (Exception ex) {
            nextSequenceService.getPrevSequence("PaymentSequence");
            throw ex;
        }
    }
}
