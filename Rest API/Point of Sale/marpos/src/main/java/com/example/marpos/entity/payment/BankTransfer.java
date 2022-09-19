package com.example.marpos.entity.payment;

import com.example.marpos.entity.order.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BankTransfer extends Payment{
    private String accountNo;
    private String bankName;
    private String contactNo;

    public BankTransfer(int id, Order order, double amount, double change, String accountNo, String bankName, String contactNo) {
        super(id, order, amount, change);
        this.accountNo = accountNo;
        this.bankName = bankName;
        this.contactNo = contactNo;
    }
}
