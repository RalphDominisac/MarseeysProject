package com.example.marpos.entity.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class DineIn extends Order{
    private int tableNo;
}
