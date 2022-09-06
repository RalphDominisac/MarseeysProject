package com.example.marpos.entity.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class BankTransfer extends Payment{
    private String accountNo;
    private String bankName;
    private String contactNo;
}
