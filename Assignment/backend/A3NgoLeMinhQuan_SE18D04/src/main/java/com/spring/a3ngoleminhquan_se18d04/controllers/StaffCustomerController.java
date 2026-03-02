package com.spring.a3ngoleminhquan_se18d04.controllers;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.CustomerResponse;
import com.spring.a3ngoleminhquan_se18d04.services.StaffCustomerService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/customers")
@RestController
public class StaffCustomerController {
    private final StaffCustomerService staffCustomerService;

    @GetMapping
    public ResponseEntity<List<CustomerResponse>> getAllCustomers() {
        return ResponseEntity.ok(staffCustomerService.getAllCustomers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerResponse> getCustomerById(@PathVariable Integer id) {
        return ResponseEntity.ok(staffCustomerService.getCustomerById(id));
    }
}
