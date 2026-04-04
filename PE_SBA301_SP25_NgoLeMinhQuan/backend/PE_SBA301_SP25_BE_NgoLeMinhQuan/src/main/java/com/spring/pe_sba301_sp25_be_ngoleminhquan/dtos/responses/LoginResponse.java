package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses;

import lombok.*;

@Getter
@Builder
public class LoginResponse {
    private String token;

    private Long expiresIn;

    private String email;

    private String role;
}
