package com.spring.pe_sba301_sp25_be_ngoleminhquan.controllers;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.AddAccountMemberRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.UpdateAccountMemberRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.AccountMemberResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.services.AccountMemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/account-members")
@RestController
public class AccountMemberController {
    private final AccountMemberService accountMemberService;

    @GetMapping
    public ResponseEntity<List<AccountMemberResponse>> getAllAccountMembers() {
        return ResponseEntity.ok(accountMemberService.getAllAccountMembers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccountMemberResponse> getCountryById(@PathVariable String id) {
        return ResponseEntity.ok(accountMemberService.getAccountMemberById(id));
    }

    @PostMapping
    public ResponseEntity<AccountMemberResponse> addCountry(@Valid @RequestBody AddAccountMemberRequest request) {
        return ResponseEntity.ok(accountMemberService.addAccountMember(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccountMemberResponse> updateAccountMember(@PathVariable String id,
                                                         @Valid @RequestBody UpdateAccountMemberRequest request)
    {
        return ResponseEntity.ok(accountMemberService.updateAccountMember(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAccountMember(@PathVariable String id) {
        return ResponseEntity.ok(accountMemberService.deleteAccountMember(id));
    }
}
