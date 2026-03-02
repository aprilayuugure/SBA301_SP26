package com.spring.a3ngoleminhquan_se18d04.dtos.response;

import lombok.*;

@Getter
@Builder
public class LoginResponse {
    private String token;

    private Long expiresIn;

    private String role;

    private String email;
}
