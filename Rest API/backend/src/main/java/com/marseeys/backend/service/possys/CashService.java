package com.marseeys.backend.service.possys;

import com.marseeys.backend.entity.possys.order.base.Order;
import com.marseeys.backend.entity.possys.payment.*;
import com.marseeys.backend.exception.CashException;
import com.marseeys.backend.exception.DatabaseException;
import com.marseeys.backend.helper.CalculationHelper;
import com.marseeys.backend.helper.FindHelper;
import com.marseeys.backend.model.possys.payment.*;
import com.marseeys.backend.repository.possys.BankNameRepository;
import com.marseeys.backend.repository.possys.OrderRepository;
import com.marseeys.backend.repository.possys.PaymentRepository;
import com.marseeys.backend.service.NextSequenceService;
import com.marseeys.backend.types.ExceptionType;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class CashService {
    private final NextSequenceService nextSequenceService;
    private final BankNameRepository bankNameRepository;
    private final PaymentRepository paymentRepository;
    private final OrderRepository orderRepository;
    private final FindHelper findHelper;
    private final CalculationHelper calculationHelper;

    public BankName saveBankName(BankNameRequest bankNameRequest) throws DatabaseException {
        try {
            BankName bankName = new BankName(
                    nextSequenceService.getNextSequence("BankNameSequence"),
                    bankNameRequest.getName()
            );

            return bankNameRepository.save(bankName);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_BANK_NAME_EXCEPTION
            );
        }
    }

    public List<BankName> getBankNames() {
        return bankNameRepository.findAll();
    }

    public void deleteBankName(BankNameRequest bankNameRequest) throws DatabaseException {
        BankName bank = findHelper.findBank(bankNameRequest.getName());

        bankNameRepository.delete(bank);
    }

    public Cash saveCash(CashRequest cashRequest) throws DatabaseException, CashException {
        Order order = findHelper.findOrder(cashRequest.getOrderId());
        double change = calculationHelper.calculateChange(order, cashRequest.getAmount());

        try {
            Cash cash = new Cash(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    cashRequest.getAmount(),
                    change
            );

            order.setPaid(!order.isPaid());

            return paymentRepository.save(cash);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_PAYMENT_EXCEPTION
            );
        }
    }

    public Credit saveCash(CreditRequest creditRequest) throws DatabaseException, CashException {
        Order order = findHelper.findOrder(creditRequest.getOrderId());
        double change = calculationHelper.calculateChange(order, creditRequest.getAmount());

        try {
            Credit credit = new Credit(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    creditRequest.getAmount(),
                    change,
                    creditRequest.getCardNo()
            );

            order.setPaid(!order.isPaid());
            orderRepository.save(order);

            return paymentRepository.save(credit);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_PAYMENT_EXCEPTION
            );
        }
    }

    public BankTransfer saveCash(BankTransferRequest bankTransferRequest) throws DatabaseException, CashException {
        Order order = findHelper.findOrder(bankTransferRequest.getOrderId());
        double change = calculationHelper.calculateChange(order, bankTransferRequest.getAmount());

        try {
            BankTransfer bankTransfer = new BankTransfer(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    bankTransferRequest.getAmount(),
                    change,
                    findHelper.findBank(bankTransferRequest.getBankName()),
                    bankTransferRequest.getAccountNo(),
                    bankTransferRequest.getContactNo()
            );

            order.setPaid(!order.isPaid());

            return paymentRepository.save(bankTransfer);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_PAYMENT_EXCEPTION
            );
        }
    }

    public DigitalWallet saveCash(DigitalWalletRequest digitalWalletRequest) throws DatabaseException, CashException {
        Order order = findHelper.findOrder(digitalWalletRequest.getOrderId());
        double change = calculationHelper.calculateChange(order, digitalWalletRequest.getAmount());

        try {
            DigitalWallet digitalWallet = new DigitalWallet(
                    nextSequenceService.getNextSequence("PaymentSequence"),
                    order,
                    digitalWalletRequest.getAmount(),
                    change,
                    digitalWalletRequest.getMobileNo()
            );

            order.setPaid(!order.isPaid());
            orderRepository.save(order);

            return paymentRepository.save(digitalWallet);
        } catch (Exception ex) {
            throw new DatabaseException(
                    ex,
                    ExceptionType.SAVE_PAYMENT_EXCEPTION
            );
        }
    }
}
