package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.CustomerRequest;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.CustomerResponse;

public interface UserCustomerService {
    public CustomerResponse getMyProfile();

    public CustomerResponse updateMyProfile(CustomerRequest request);
}
