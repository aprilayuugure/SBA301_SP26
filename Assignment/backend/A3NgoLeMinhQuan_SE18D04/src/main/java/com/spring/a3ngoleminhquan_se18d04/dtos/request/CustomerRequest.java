package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CustomerRequest {
    @NotBlank(message = "Customer full name cannot be null")
    private String customerFullName;

    @NotBlank(message = "Telephone cannot be null")
    private String telephone;

    @NotBlank(message = "Email address cannot be null")
    private String emailAddress;

    @NotNull(message = "Customer birthday cannot be null")
    private LocalDate customerBirthday;
}
