package com.example.marpos.model.payment;

@SuppressWarnings("FieldCanBeLocal")
public class BankTransfer extends Payment{
    final private String accountNumber;
    final private String bankName;
    final private String contactNo;

    public BankTransfer(double amount, String accountNumber, String bankName, String contactNo) {
        super(amount);
        this.accountNumber = accountNumber;
        this.bankName = bankName;
        this.contactNo = contactNo;
    }
}
