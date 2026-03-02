package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import com.spring.a3ngoleminhquan_se18d04.validations.ValidDateRange;
import jakarta.validation.constraints.*;
import java.time.LocalDate;
import lombok.*;

@ValidDateRange
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddBookingDetailRequest implements DateRangeRequest {
    @NotNull(message = "Booking reservation ID cannot be null")
    private Integer bookingReservationId;

    @NotNull(message = "Room ID cannot be null")
    private Integer roomId;

    @NotNull(message = "Start date cannot be null")
    private LocalDate startDate;

    @NotNull(message = "End date cannot be null")
    private LocalDate endDate;
}
