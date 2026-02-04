package com.spring.a2ngoleminhquan_se18d04.controllers;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class SystemAccountController {
    @Autowired
    private ISystemAccountService iAccountService;

    @GetMapping
    public ResponseEntity<List<SystemAccount>> getAllAccounts() {
        return ResponseEntity.ok(iAccountService.getAllAccounts());
    }

    @GetMapping("/{accountId}")
    public ResponseEntity<SystemAccount> getAccountById(@PathVariable Integer accountId) {
        return ResponseEntity.ok(iAccountService.getAccountById(accountId));
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public SystemAccount saveAccount(@RequestBody SystemAccount sa) {
        return iAccountService.addAccount(sa);
    }

    @PutMapping("/{accountId}/update")
    public ResponseEntity<SystemAccount> updateAccount(@PathVariable Integer accountId, @RequestBody SystemAccount sa) {
        return ResponseEntity.ok(iAccountService.updateAccount(accountId, sa));
    }

    @DeleteMapping("/{accountId}/delete")
    public ResponseEntity<String> deleteAccount(@PathVariable Integer accountId) {
        return ResponseEntity.ok(iAccountService.deleteAccount(accountId));
    }
}
