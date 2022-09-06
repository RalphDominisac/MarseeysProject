package com.example.marpos.entity.payment;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class DigitalWallet extends Payment{
    private String mobileNo;
}
