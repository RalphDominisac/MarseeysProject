package com.marseeys.inventory.entity.email;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class EmailDetails {
    private String subject;
    private String msgBody;
    private List<String> recipient;
}
