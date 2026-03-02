package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingDetailResponse;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingReservationResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.BookingReservation;
import com.spring.a3ngoleminhquan_se18d04.entities.Customer;
import com.spring.a3ngoleminhquan_se18d04.enums.BookingStatus;
import com.spring.a3ngoleminhquan_se18d04.repositories.*;
import com.spring.a3ngoleminhquan_se18d04.utils.SecurityUtil;
import lombok.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserBookingReservationServiceImpl implements UserBookingReservationService {
    private final BookingReservationRepository bookingReservationRepo;

    private final CustomerRepository customerRepo;

    @Transactional
    @Override
    public BookingReservationResponse addReservation() {
        Integer customerId = SecurityUtil.getCurrentUserId();

        BookingReservation bookingReservation = new BookingReservation();
        bookingReservation.setBookingDate(LocalDate.now());
        bookingReservation.setBookingStatus(BookingStatus.PENDING);
        bookingReservation.setTotalPrice(0);

        Customer customer = customerRepo.findById(customerId)
                                        .orElseThrow(() -> new IllegalArgumentException("Customer not found"));

        bookingReservation.setCustomer(customer);

        BookingReservation saved = bookingReservationRepo.save(bookingReservation);

        return toBookingReservationResponse(saved);
    }

    @Override
    public BookingReservationResponse getReservation(Integer id) {

        Integer customerId = SecurityUtil.getCurrentUserId();

        BookingReservation reservation =
                bookingReservationRepo.findById(id)
                        .filter(r -> r.getCustomer().getCustomerId().equals(customerId))
                        .orElseThrow(() -> new IllegalArgumentException("Not found"));

        return toBookingReservationResponse(reservation);
    }

    @Override
    public List<BookingReservationResponse> getMyReservations() {

        Integer customerId = SecurityUtil.getCurrentUserId();

        return bookingReservationRepo
                .findByCustomer_CustomerId(customerId)
                .stream()
                .map(this::toBookingReservationResponse)
                .toList();
    }

    @Transactional
    @Override
    public String cancelReservation(Integer id) {

        Integer customerId = SecurityUtil.getCurrentUserId();

        BookingReservation reservation =
                bookingReservationRepo.findById(id)
                        .filter(r -> r.getCustomer().getCustomerId().equals(customerId))
                        .orElseThrow(() -> new IllegalArgumentException("Not found"));

        if (reservation.getBookingStatus() != BookingStatus.PENDING)
            throw new IllegalStateException("Cannot cancel non-pending reservations");

        reservation.setBookingStatus(BookingStatus.REJECTED);

        return "Cancel succeeded";
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
