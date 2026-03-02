package com.spring.a3ngoleminhquan_se18d04.entities;

import jakarta.persistence.*;
import lombok.*;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BookingDetailId {
    private Integer bookingReservationId;

    private Integer roomId;
}
