package com.marseeys.backend.entity.possys.payment;

import com.marseeys.backend.entity.possys.order.base.Order;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class BankTransfer extends Cash{
    private BankName bankName;
    private String accountNo;
    private String contactNo;

    public BankTransfer(int id, Order order, double amount, double change, BankName bankName, String accountNo, String contactNo) {
        super(id, order, amount, change);
        this.bankName = bankName;
        this.accountNo = accountNo;
        this.contactNo = contactNo;
    }
}
