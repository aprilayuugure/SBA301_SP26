package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;


import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.*;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.AccountMemberResponse;

import java.util.List;

public interface AccountMemberService {
    public List<AccountMemberResponse> getAllAccountMembers();

    public AccountMemberResponse getAccountMemberById(String memberId);

    public AccountMemberResponse addAccountMember(AddAccountMemberRequest request);

    public AccountMemberResponse updateAccountMember(String memberId, UpdateAccountMemberRequest request);

    public String deleteAccountMember(String memberId);
}
