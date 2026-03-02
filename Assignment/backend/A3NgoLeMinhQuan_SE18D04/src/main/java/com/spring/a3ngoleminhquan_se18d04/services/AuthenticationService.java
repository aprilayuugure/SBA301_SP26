package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.*;
import com.spring.a3ngoleminhquan_se18d04.entities.Customer;
import com.spring.a3ngoleminhquan_se18d04.enums.CustomerStatus;
import com.spring.a3ngoleminhquan_se18d04.repositories.CustomerRepository;
import lombok.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final CustomerRepository customerRepo;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authManager;

    private final JwtService jwtService;

    public Customer register(RegisterRequest request) {
        Customer c = new Customer();

        c.setCustomerFullName(request.getCustomerFullName());
        c.setTelephone(request.getTelephone());
        c.setEmailAddress(request.getEmailAddress());
        c.setCustomerBirthday(request.getCustomerBirthday());
        c.setCustomerStatus(CustomerStatus.INACTIVE);
        c.setPassword(passwordEncoder.encode(request.getPassword()));

        return customerRepo.save(c);
    }

    public LoginResponse authenticate(LoginRequest request) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmailAddress(), request.getPassword())
        );

        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String role = userDetails.getAuthorities()
                .iterator()
                .next()
                .getAuthority();

        if (role.equals("ROLE_STAFF")) {
            String token = jwtService.generateToken(userDetails);

            return LoginResponse.builder()
                    .token(token)
                    .expiresIn(jwtService.getExpirationTime())
                    .role(role)
                    .email(userDetails.getUsername())
                    .build();
        }

        Customer customer = customerRepo.findByEmailAddress(userDetails.getUsername())
                                        .orElseThrow(() -> new RuntimeException("User not found"));
        customer.setCustomerStatus(CustomerStatus.ACTIVE);
        customerRepo.save(customer);

        String token = jwtService.generateToken(userDetails);

        return LoginResponse.builder()
                            .token(token)
                            .expiresIn(jwtService.getExpirationTime())
                            .role(role)
                            .email(userDetails.getUsername())
                            .build();
    }

    public String logout() {
        String emailAddress = SecurityContextHolder.getContext().getAuthentication().getName();

        Customer customer = customerRepo.findByEmailAddress(emailAddress)
                .orElseThrow(() -> new RuntimeException("User not found"));
        customer.setCustomerStatus(CustomerStatus.INACTIVE);
        customerRepo.save(customer);

        return "Logout succeeded";
    }
}
