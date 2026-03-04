package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.enums.Role;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AccountMemberResponse {
    private String memberId;

    private String emailAddress;

    private Role memberRole;
}
