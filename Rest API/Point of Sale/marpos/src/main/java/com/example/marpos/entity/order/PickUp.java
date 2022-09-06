package com.example.marpos.entity.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.time.LocalTime;

@Data
@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class PickUp extends Order{
    private String phoneNo;
//    private PickUpType type;
    private LocalTime estimatedTime;
}
