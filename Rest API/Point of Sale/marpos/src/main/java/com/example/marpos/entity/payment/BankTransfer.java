package com.example.marpos.entity.payment;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class BankTransfer extends Payment{
    private String accountNo;
    private String bankName;
    private String contactNo;

    public BankTransfer(int id, int orderId, double amount, double change, String accountNo, String bankName, String contactNo) {
        super(id, orderId, amount, change);
        this.accountNo = accountNo;
        this.bankName = bankName;
        this.contactNo = contactNo;
    }
}
