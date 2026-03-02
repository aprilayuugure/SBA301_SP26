package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.CustomerResponse;
import java.util.*;

public interface StaffCustomerService {
    public List<CustomerResponse> getAllCustomers();

    public CustomerResponse getCustomerById(Integer customerId);
}
