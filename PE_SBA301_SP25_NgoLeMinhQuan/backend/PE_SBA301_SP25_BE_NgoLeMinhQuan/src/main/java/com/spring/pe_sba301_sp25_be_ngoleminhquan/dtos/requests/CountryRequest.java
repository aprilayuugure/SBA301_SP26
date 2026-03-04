package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests;

import jakarta.validation.constraints.NotBlank;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CountryRequest {
    @NotBlank(message = "Country name is required")
    private String countryName;
}
