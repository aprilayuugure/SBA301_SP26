package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests;

import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegisterRequest {
    @NotBlank(message = "Email address cannot be null")
    private String emailAddress;

    @NotBlank(message = "Password cannot be null")
    private String password;
}
