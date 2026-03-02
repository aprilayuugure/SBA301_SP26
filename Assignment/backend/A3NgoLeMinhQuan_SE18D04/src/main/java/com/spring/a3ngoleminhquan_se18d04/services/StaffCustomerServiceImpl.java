package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.CustomerResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.Customer;
import com.spring.a3ngoleminhquan_se18d04.repositories.CustomerRepository;
import lombok.*;
import org.springframework.stereotype.Service;
import java.util.*;

@RequiredArgsConstructor
@Service
public class StaffCustomerServiceImpl implements StaffCustomerService{
    private final CustomerRepository customerRepo;

    @Override
    public List<CustomerResponse> getAllCustomers() {
        return customerRepo.findAll()
                           .stream()
                           .map(this::toCustomerResponse)
                           .toList();
    }

    @Override
    public CustomerResponse getCustomerById(Integer customerId) {
        return customerRepo.findById(customerId).map(this::toCustomerResponse)
                           .orElseThrow(() -> new IllegalArgumentException("Customer not found"));
    }

    private CustomerResponse toCustomerResponse(Customer customer) {
        return new CustomerResponse(
                customer.getCustomerId(),
                customer.getCustomerFullName(),
                customer.getTelephone(),
                customer.getEmailAddress(),
                customer.getCustomerBirthday(),
                customer.getCustomerStatus()
        );
    }
}
