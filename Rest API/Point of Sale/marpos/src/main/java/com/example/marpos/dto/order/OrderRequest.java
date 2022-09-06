package com.example.marpos.dto.order;

import com.example.marpos.entity.item.Item;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    @NotNull(message = "Please input a customer name")
    @Size(min = 2, message = "Please input a customer name")
    private String customer;

    @NotEmpty(message = "Please provide a list of items")
    private List<@Valid Item> contents;
}
