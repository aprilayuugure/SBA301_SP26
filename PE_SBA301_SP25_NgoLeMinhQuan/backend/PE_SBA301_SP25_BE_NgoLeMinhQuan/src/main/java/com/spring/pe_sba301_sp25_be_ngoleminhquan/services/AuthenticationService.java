package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;


import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.*;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.LoginResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.AccountMember;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.enums.Role;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.AccountMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.*;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final AccountMemberRepository accountMemberRepo;

    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authManager;

    private final JwtService jwtService;

    public AccountMember register(RegisterRequest request) {
        AccountMember m = new AccountMember();

        m.setEmailAddress(request.getEmailAddress());
        m.setMemberPassword(request.getPassword());
        m.setMemberRole(Role.MEMBER);

        return accountMemberRepo.save(m);
    }

    public LoginResponse authenticate(LoginRequest request) {
        Authentication auth = authManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmailAddress(), request.getMemberPassword())
        );

        UserDetails userDetails = (UserDetails) auth.getPrincipal();

        String role = userDetails.getAuthorities()
                .iterator()
                .next()
                .getAuthority();

        AccountMember accountMember = accountMemberRepo.findByEmailAddress(userDetails.getUsername())
                                                       .orElseThrow(() -> new RuntimeException("User not found"));

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

        AccountMember accountMember = accountMemberRepo.findByEmailAddress(emailAddress)
                                                       .orElseThrow(() -> new RuntimeException("User not found"));

        return "Logout succeeded";
    }
}
