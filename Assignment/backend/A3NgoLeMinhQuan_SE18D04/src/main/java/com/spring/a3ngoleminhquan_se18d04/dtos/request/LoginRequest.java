package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LoginRequest {
    @NotBlank(message = "Email address cannot be null")
    private String emailAddress;

    @NotBlank(message = "Password cannot be null")
    private String password;
}
