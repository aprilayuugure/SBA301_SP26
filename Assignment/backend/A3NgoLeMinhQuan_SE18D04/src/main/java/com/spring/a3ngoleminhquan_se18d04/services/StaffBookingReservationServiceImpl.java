package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.*;
import com.spring.a3ngoleminhquan_se18d04.entities.BookingReservation;
import com.spring.a3ngoleminhquan_se18d04.enums.BookingStatus;
import com.spring.a3ngoleminhquan_se18d04.repositories.BookingReservationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@RequiredArgsConstructor
@Service
public class StaffBookingReservationServiceImpl implements StaffBookingReservationService {
    private final BookingReservationRepository bookingReservationRepo;

    @Override
    public List<BookingReservationResponse> getAllReservations() {

        return bookingReservationRepo.findAll()
                .stream()
                .map(this::toBookingReservationResponse)
                .toList();
    }

    @Override
    public BookingReservationResponse getReservationById(Integer bookingReservationId) {

        BookingReservation reservation =
                bookingReservationRepo.findById(bookingReservationId)
                        .orElseThrow(() -> new IllegalArgumentException("Not found"));

        return toBookingReservationResponse(reservation);
    }

    @Transactional
    @Override
    public BookingReservationResponse updateStatus(Integer bookingReservationId, BookingStatus status) {

        BookingReservation reservation =
                bookingReservationRepo.findById(bookingReservationId)
                        .orElseThrow(() -> new IllegalArgumentException("Reservation not found"));

        reservation.setBookingStatus(status);

        return toBookingReservationResponse(reservation);
    }

    private BookingReservationResponse toBookingReservationResponse(BookingReservation r) {
        return new BookingReservationResponse(
                r.getBookingReservationId(),
                r.getCustomer().getCustomerFullName(),
                r.getBookingDate(),
                r.getBookingStatus(),
                r.getTotalPrice(),
                r.getBookingDetails()
                        .stream()
                        .map(bd -> new BookingDetailResponse(
                                bd.getRoomInformation().getRoomId(),
                                bd.getStartDate(),
                                bd.getEndDate(),
                                bd.getActualPrice()
                        ))
                        .toList()
        );
    }
}
