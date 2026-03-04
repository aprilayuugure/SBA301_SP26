package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.enums.Role;
import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UpdateAccountMemberRequest {
    @NotBlank(message = "Email address cannot be null")
    private String emailAddress;

    @NotNull(message = "Role cannot be null")
    private Role memberRole;
}
