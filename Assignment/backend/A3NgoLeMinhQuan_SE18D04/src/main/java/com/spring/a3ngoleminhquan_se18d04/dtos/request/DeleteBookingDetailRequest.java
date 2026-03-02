package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DeleteBookingDetailRequest {
    @NotNull(message = "Booking reservation ID cannot be null")
    private Integer bookingReservationId;

    @NotNull(message = "Room ID cannot be null")
    private Integer roomId;
}
