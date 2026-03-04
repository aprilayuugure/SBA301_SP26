package com.spring.pe_sba301_sp25_be_ngoleminhquan.controllers;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.*;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.LoginResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.AccountMember;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.services.AuthenticationService;
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
    public ResponseEntity<AccountMember> register(@Valid @RequestBody RegisterRequest request) {
        AccountMember c = authService.register(request);
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
