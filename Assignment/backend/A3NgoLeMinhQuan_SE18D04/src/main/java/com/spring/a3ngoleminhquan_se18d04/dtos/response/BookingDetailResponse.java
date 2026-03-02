package com.spring.a3ngoleminhquan_se18d04.dtos.response;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookingDetailResponse {
    private Integer roomId;

    private LocalDate startDate;

    private LocalDate endDate;

    private double actualPrice;

}
