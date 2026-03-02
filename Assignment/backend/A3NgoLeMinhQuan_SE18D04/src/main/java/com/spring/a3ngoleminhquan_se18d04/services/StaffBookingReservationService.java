package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingReservationResponse;
import com.spring.a3ngoleminhquan_se18d04.enums.BookingStatus;

import java.util.List;

public interface StaffBookingReservationService {

    public List<BookingReservationResponse> getAllReservations();

    public BookingReservationResponse getReservationById(Integer bookingReservationId);

    public BookingReservationResponse updateStatus(Integer bookingReservationId, BookingStatus status);
}
