package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.enums.Role;
import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddAccountMemberRequest {
    @NotBlank(message = "Email address cannot be null")
    private String emailAddress;

    @NotBlank(message = "Password cannot be null")
    private String memberPassword;

    @NotNull(message = "Role cannot be null")
    private Role memberRole;
}
