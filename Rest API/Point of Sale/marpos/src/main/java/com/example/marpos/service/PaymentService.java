package com.example.marpos.service;

import com.example.marpos.entity.order.Order;
import com.example.marpos.entity.payment.BankTransfer;
import com.example.marpos.entity.payment.Credit;
import com.example.marpos.entity.payment.DigitalWallet;
import com.example.marpos.entity.payment.Payment;
import com.example.marpos.exception.DatabaseException;
import com.example.marpos.exception.PaymentException;
import com.example.marpos.helper.DatabaseHelper;
import com.example.marpos.model.payment.BankTransferRequest;
import com.example.marpos.model.payment.CreditRequest;
import com.example.marpos.model.payment.DigitalWalletRequest;
import com.example.marpos.model.payment.PaymentRequest;
import com.example.marpos.repository.OrderRepository;
import com.example.marpos.repository.PaymentRepository;
import com.example.marpos.types.ExceptionTypeEnum;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class PaymentService {
    private PaymentRepository paymentRepository;
    private OrderRepository orderRepository;
    private NextSequenceService nextSequenceService;
    private DatabaseHelper databaseHelper;

    //  savePayment(Cash, Credit, BankTransfer, DigitalWallet) - done

    /**
     * Creates a payment document representing cash payments
     * @param paymentRequest PaymentRequest
     * @return created Payment
     * @throws DatabaseException 20002L
     * @throws PaymentException 30001L, 30002L
     */
    public Payment savePayment(PaymentRequest paymentRequest) throws DatabaseException, PaymentException {
        Order order = orderRepository.findById(paymentRequest.getOrderId()).orElseThrow(() -> new DatabaseException(
                paymentRequest.getOrderId().toString(),
                ExceptionTypeEnum.ORDER_NOT_FOUND_EXCEPTION
        ));
        double change = paymentRequest.getAmount() - order.getPrice();

        databaseHelper.paymentErrorCheck(order, change);

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
            throw ex;
        }
    }

    /**
     * Creates a payment document using the Credit class
     * @param creditRequest CreditRequest
     * @return created Payment
     * @throws DatabaseException 20002L
     * @throws PaymentException 30001L, 30002L
     */
    public Payment savePayment(CreditRequest creditRequest) throws DatabaseException, PaymentException {
        Order order = orderRepository.findById(creditRequest.getOrderId()).orElseThrow(() -> new DatabaseException(
                creditRequest.getOrderId().toString(),
                ExceptionTypeEnum.ORDER_NOT_FOUND_EXCEPTION
        ));
        double change = creditRequest.getAmount() - order.getPrice();

        databaseHelper.paymentErrorCheck(order, change);

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
            throw ex;
        }
    }

    /**
     * Creates a payment document using the BankTransfer class
     * @param bankTransferRequest BankTransferRequest
     * @return created Payment
     * @throws DatabaseException 20002L
     * @throws PaymentException 30001L, 30002L
     */
    public Payment savePayment(BankTransferRequest bankTransferRequest) throws DatabaseException, PaymentException {
        Order order = orderRepository.findById(bankTransferRequest.getOrderId()).orElseThrow(() -> new DatabaseException(
                bankTransferRequest.getOrderId().toString(),
                ExceptionTypeEnum.ORDER_NOT_FOUND_EXCEPTION
        ));
        double change = bankTransferRequest.getAmount() - order.getPrice();

        databaseHelper.paymentErrorCheck(order, change);

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
            throw ex;
        }
    }

    /**
     * Creates a payment document using the DigitalWallet class
     * @param digitalWalletRequest DigitalWalletRequest
     * @return created Payment
     * @throws DatabaseException 20002L
     * @throws PaymentException 30001L, 30002L
     */
    public Payment savePayment(DigitalWalletRequest digitalWalletRequest) throws DatabaseException, PaymentException {
        Order order = orderRepository.findById(digitalWalletRequest.getOrderId()).orElseThrow(() -> new DatabaseException(
                digitalWalletRequest.getOrderId().toString(),
                ExceptionTypeEnum.ORDER_NOT_FOUND_EXCEPTION
        ));
        double change = digitalWalletRequest.getAmount() - order.getPrice();

        databaseHelper.paymentErrorCheck(order, change);

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
            throw ex;
        }
    }
}
