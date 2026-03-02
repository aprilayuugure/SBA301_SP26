package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingReservationResponse;
import java.util.List;

public interface UserBookingReservationService {
    public BookingReservationResponse addReservation();

    public BookingReservationResponse getReservation(Integer bookingReservationId);

    public List<BookingReservationResponse> getMyReservations();

    String cancelReservation(Integer reservationId);
}
