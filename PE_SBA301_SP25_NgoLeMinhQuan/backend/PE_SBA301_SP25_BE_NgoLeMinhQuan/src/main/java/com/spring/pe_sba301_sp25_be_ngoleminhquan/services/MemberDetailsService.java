package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.AccountMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MemberDetailsService implements UserDetailsService {
    private final AccountMemberRepository accountMemberRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return accountMemberRepo.findByEmailAddress(email)
                           .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
