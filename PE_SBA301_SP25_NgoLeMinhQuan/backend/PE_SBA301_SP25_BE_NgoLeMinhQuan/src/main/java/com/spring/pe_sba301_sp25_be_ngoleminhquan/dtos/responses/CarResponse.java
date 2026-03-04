package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses;

import lombok.*;
import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CarResponse {
    private Integer carId;

    private String carName;

    private CountryResponse countryResponse;

    private int unitsInStock;

    private double unitPrice;

    private LocalDate createdAt;

    private LocalDate updatedAt;
}
