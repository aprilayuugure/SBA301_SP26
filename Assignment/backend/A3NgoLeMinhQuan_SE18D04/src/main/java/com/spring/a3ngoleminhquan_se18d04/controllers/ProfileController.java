package com.spring.a3ngoleminhquan_se18d04.controllers;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.CustomerRequest;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.CustomerResponse;
import com.spring.a3ngoleminhquan_se18d04.services.UserCustomerService;
import jakarta.persistence.PreUpdate;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/profile")
@RestController
public class ProfileController {
    private final UserCustomerService userCustomerService;

    @GetMapping
    public ResponseEntity<CustomerResponse> getMyProfile() {
        return ResponseEntity.ok(userCustomerService.getMyProfile());
    }

    @PutMapping
    public ResponseEntity<CustomerResponse> updateMyProfile(@Valid @RequestBody CustomerRequest request) {
        return ResponseEntity.ok(userCustomerService.updateMyProfile(request));
    }
}
