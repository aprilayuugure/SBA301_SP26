package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.*;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.AccountMemberResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.AccountMember;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.AccountMemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class AccountMemberServiceImpl implements AccountMemberService {
    private final AccountMemberRepository accountMemberRepo;

    @Override
    public List<AccountMemberResponse> getAllAccountMembers() {
        return accountMemberRepo.findAll()
                .stream()
                .map(this::toAccountMemberResponse)
                .toList();
    }

    @Override
    public AccountMemberResponse getAccountMemberById(String memberId) {
        return accountMemberRepo.findById(memberId).map(this::toAccountMemberResponse)
                .orElseThrow(() -> new RuntimeException("Account member not found"));
    }

    @Override
    public AccountMemberResponse addAccountMember(AddAccountMemberRequest request) {
        AccountMember a = new AccountMember();
        a.setMemberId(generateMemberId());
        a.setEmailAddress(request.getEmailAddress());
        a.setMemberPassword(request.getMemberPassword());
        a.setMemberRole(request.getMemberRole());

        AccountMember saved = accountMemberRepo.save(a);

        return toAccountMemberResponse(saved);
    }

    @Override
    public AccountMemberResponse updateAccountMember(String memberId, UpdateAccountMemberRequest request) {
        AccountMember a = accountMemberRepo.findById(memberId)
                .orElseThrow(() -> new RuntimeException("Account member not found"));

        a.setEmailAddress(request.getEmailAddress());
        a.setMemberRole(request.getMemberRole());

        AccountMember saved = accountMemberRepo.save(a);

        return toAccountMemberResponse(saved);
    }

    @Override
    public String deleteAccountMember(String memberId) {
        AccountMember a = accountMemberRepo.findById(memberId)
                .orElseThrow(() -> new RuntimeException("Account member not found"));

        accountMemberRepo.delete(a);

        return "Deletion succeeded";
    }

    private AccountMemberResponse toAccountMemberResponse(AccountMember a) {
        return new AccountMemberResponse(
                a.getMemberId(),
                a.getEmailAddress(),
                a.getMemberRole()
        );
    }

    private String generateMemberId() {
        Optional<AccountMember> lastMember = accountMemberRepo.findTopByOrderByMemberIdDesc();

        if (lastMember.isEmpty()) return "PS0001";

        String lastId = lastMember.get().getMemberId();

        int number = Integer.parseInt(lastId.substring(2));

        number++;

        return String.format("PS%04d", number);
    }
}
