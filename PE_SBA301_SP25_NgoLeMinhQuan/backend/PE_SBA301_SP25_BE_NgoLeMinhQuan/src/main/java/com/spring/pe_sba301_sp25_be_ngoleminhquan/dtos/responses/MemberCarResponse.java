package com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MemberCarResponse {
    private Integer carId;

    private String carName;

    private CountryResponse countryResponse;

    private int unitsInStock;

    private int unitPrice;
}
