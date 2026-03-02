package com.spring.a3ngoleminhquan_se18d04.dtos.response;

import com.spring.a3ngoleminhquan_se18d04.enums.CustomerStatus;
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
public class CustomerResponse {
    private Integer customerId;

    private String customerFullName;

    private String telephone;

    private String emailAddress;

    private LocalDate customerBirthday;

    private CustomerStatus customerStatus;
}
