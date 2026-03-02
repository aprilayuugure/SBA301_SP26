package com.spring.a3ngoleminhquan_se18d04.controllers;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.LoginResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.Customer;
import com.spring.a3ngoleminhquan_se18d04.services.*;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/auth")
@Controller
public class AuthenticationController {
    private final AuthenticationService authService;

    @PostMapping("/register")
    public ResponseEntity<Customer> register(@Valid @RequestBody RegisterRequest request) {
        Customer c = authService.register(request);
        return ResponseEntity.ok(c);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@Valid @RequestBody LoginRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout() {
        return ResponseEntity.ok(authService.logout());
    }
}
