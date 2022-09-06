package com.example.marpos.entity.order;

import com.example.marpos.enumeration.DeliveryMethod;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
public class Delivery extends Order{
    private String address;
    private DeliveryMethod method;
}
