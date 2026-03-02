package com.spring.a3ngoleminhquan_se18d04.entities;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "booking_details")
public class BookingDetail {
    @EmbeddedId
    private BookingDetailId bookingDetailId;

    @ManyToOne
    @MapsId("bookingReservationId")
    @JoinColumn(name = "booking_reservation_id")
    private BookingReservation bookingReservation;

    @ManyToOne
    @MapsId("roomId")
    @JoinColumn(name = "room_id")
    private RoomInformation roomInformation;

    @Column(name = "start_date")
    private LocalDate startDate;

    @Column(name = "end_date")
    private LocalDate endDate;

    @Column(name = "actual_price")
    private double actualPrice;

    @Override
    public String toString() {
        return "Booking reservation ID: " + bookingDetailId.getBookingReservationId() + '\n'
                + "Room information: " + bookingDetailId.getRoomId() + '\n'
                + "Start date: " + startDate + '\n'
                + "End date: " + endDate + '\n'
                + "Actual price: " + actualPrice + '\n';
    }
}
