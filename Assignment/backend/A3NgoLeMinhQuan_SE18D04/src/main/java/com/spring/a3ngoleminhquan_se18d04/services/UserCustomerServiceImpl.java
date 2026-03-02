package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.CustomerRequest;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.CustomerResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.Customer;
import com.spring.a3ngoleminhquan_se18d04.repositories.CustomerRepository;
import lombok.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserCustomerServiceImpl implements UserCustomerService {
    private final CustomerRepository customerRepo;

    private Customer getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        if (auth == null || !auth.isAuthenticated()) {
            throw new RuntimeException("Unauthenticated");
        }

        Object principal = auth.getPrincipal();

        if (!(principal instanceof Customer)) {
            throw new RuntimeException("Only customer can access this resource");
        }

        return (Customer) principal;
    }

    @Override
    public CustomerResponse getMyProfile() {
        return toCustomerResponse(getCurrentUser());
    }

    @Override
    public CustomerResponse updateMyProfile(CustomerRequest request) {
        Customer customer = getCurrentUser();

        customer.setCustomerFullName(request.getCustomerFullName());
        customer.setTelephone(request.getTelephone());
        customer.setEmailAddress(request.getEmailAddress());
        customer.setCustomerBirthday(request.getCustomerBirthday());

        customerRepo.save(customer);

        return toCustomerResponse(customer);
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
