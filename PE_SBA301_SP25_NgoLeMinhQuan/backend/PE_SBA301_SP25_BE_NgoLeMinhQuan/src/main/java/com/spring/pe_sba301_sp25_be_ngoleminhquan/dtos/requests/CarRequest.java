package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarRequest {
    @NotBlank(message = "Car name cannot be null")
    @NotBlank(message = "Car name is required")
    @Size(min = 11, message = "Car name must be greater than 10 characters")
    private String carName;

    @NotNull(message = "Country ID cannot be null")
    private Integer countryId;

    @NotNull(message = "Units in stock is required")
    @Min(value = 5, message = "Units in stock must be at least 5")
    @Max(value = 20, message = "Units in stock must not exceed 20")
    private int unitsInStock;

    @Min(value = 1, message = "Unit price must be >= 0")
    private int unitPrice;
}
