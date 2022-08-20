package com.example.marpos.service;

import com.example.marpos.dto.CustomerRequest;
import com.example.marpos.entity.customer.Customer;
import com.example.marpos.repository.CustomerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class CustomerService {
    private final CustomerRepository customerRepository;
    private final NextSequenceService nextSequenceService;

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public Customer saveCustomer(CustomerRequest customerRequest) {
            Customer customer = Customer.build(nextSequenceService.getNextSequence("CustomerSequence"), customerRequest.getName());
            return customerRepository.save(customer);
    }
}
