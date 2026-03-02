package com.spring.a3ngoleminhquan_se18d04.dtos.response;

import com.spring.a3ngoleminhquan_se18d04.enums.BookingStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;
import java.util.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BookingReservationResponse {

    private Integer bookingReservationId;
    private String customerName;
    private LocalDate bookingDate;
    private BookingStatus bookingStatus;
    private double totalPrice;
    private List<BookingDetailResponse> bookingDetails;
}
