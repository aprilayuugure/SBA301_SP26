package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RegisterRequest {
    @NotBlank(message = "Customer full name cannot be null")
    private String customerFullName;

    @NotBlank(message = "Telephone cannot be null")
    private String telephone;

    @NotBlank(message = "Email address cannot be null")
    private String emailAddress;

    @NotNull(message = "Customer birthday cannot be null")
    private LocalDate customerBirthday;

    @NotBlank(message = "Password cannot be null")
    private String password;
}
