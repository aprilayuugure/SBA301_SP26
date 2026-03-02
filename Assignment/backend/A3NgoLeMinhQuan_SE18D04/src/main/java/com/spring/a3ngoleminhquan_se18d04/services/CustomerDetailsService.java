package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.configurations.StaffProperties;
import com.spring.a3ngoleminhquan_se18d04.repositories.CustomerRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

import java.util.*;

@RequiredArgsConstructor
@Service
public class CustomerDetailsService implements UserDetailsService {
    private final CustomerRepository customerRepo;

    private final StaffProperties staffProperties;

    @PostConstruct
    public void init() {
        System.out.println("=== CustomerDetailsService CREATED ===");
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        if (email.equals(staffProperties.getEmail())) {
            return User.builder()
                    .username(staffProperties.getEmail())
                    .password(staffProperties.getPassword())
                    .authorities(List.of(new SimpleGrantedAuthority(staffProperties.getRole())))
                    .build();
        }

        return customerRepo.findByEmailAddress(email)
                           .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
