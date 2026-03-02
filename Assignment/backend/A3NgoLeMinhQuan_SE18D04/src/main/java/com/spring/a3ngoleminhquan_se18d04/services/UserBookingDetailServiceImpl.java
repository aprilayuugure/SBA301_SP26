package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingDetailResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.*;
import com.spring.a3ngoleminhquan_se18d04.enums.BookingStatus;
import com.spring.a3ngoleminhquan_se18d04.repositories.*;
import com.spring.a3ngoleminhquan_se18d04.utils.SecurityUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.temporal.ChronoUnit;
import java.util.List;

@RequiredArgsConstructor
@Service
public class UserBookingDetailServiceImpl implements UserBookingDetailService {

    private final BookingDetailRepository bookingDetailRepo;
    private final BookingReservationRepository bookingReservationRepo;
    private final RoomInformationRepository roomInformationRepo;

    @Override
    public List<BookingDetailResponse> getBookingDetails(Integer bookingReservationId) {

        Integer customerId = SecurityUtil.getCurrentUserId();

        return bookingDetailRepo
                .findByBookingReservation_BookingReservationIdAndBookingReservation_Customer_CustomerId(
                        bookingReservationId, customerId
                )
                .stream()
                .map(this::toResponse)
                .toList();
    }

    @Transactional
    @Override
    public BookingDetailResponse addBookingDetail(AddBookingDetailRequest request) {

        Integer customerId = SecurityUtil.getCurrentUserId();

        BookingReservation reservation = getPendingReservation(
                request.getBookingReservationId(),
                customerId
        );

        RoomInformation room = roomInformationRepo.findById(request.getRoomId())
                .orElseThrow(() -> new IllegalArgumentException("Room not found"));

        BookingDetailId id = new BookingDetailId(
                request.getBookingReservationId(),
                request.getRoomId()
        );

        if (bookingDetailRepo.existsById(id)) {
            throw new IllegalStateException("Room already added to this reservation");
        }

        long days = ChronoUnit.DAYS.between(
                request.getStartDate(),
                request.getEndDate()
        );

        if (days <= 0) {
            throw new IllegalArgumentException("End date must be after start date");
        }

        double actualPrice = days * room.getRoomPricePerDay();

        BookingDetail detail = new BookingDetail();
        detail.setBookingDetailId(id);
        detail.setBookingReservation(reservation);
        detail.setRoomInformation(room);
        detail.setStartDate(request.getStartDate());
        detail.setEndDate(request.getEndDate());
        detail.setActualPrice(actualPrice);

        BookingDetail saved = bookingDetailRepo.save(detail);

        recalculateTotalPrice(reservation);

        return toResponse(saved);
    }

    @Transactional
    @Override
    public BookingDetailResponse updateBookingDetail(UpdateBookingDetailRequest request) {

        Integer customerId = SecurityUtil.getCurrentUserId();

        BookingReservation reservation = getPendingReservation(
                request.getBookingReservationId(),
                customerId
        );

        BookingDetailId id = new BookingDetailId(
                request.getBookingReservationId(),
                request.getRoomId()
        );

        BookingDetail detail = bookingDetailRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Booking detail not found"));

        long days = ChronoUnit.DAYS.between(
                request.getStartDate(),
                request.getEndDate()
        );

        if (days <= 0) {
            throw new IllegalArgumentException("End date must be after start date");
        }

        double actualPrice = days * detail.getRoomInformation().getRoomPricePerDay();

        detail.setStartDate(request.getStartDate());
        detail.setEndDate(request.getEndDate());
        detail.setActualPrice(actualPrice);

        BookingDetail saved = bookingDetailRepo.save(detail);

        recalculateTotalPrice(reservation);

        return toResponse(saved);
    }

    @Transactional
    @Override
    public String deleteBookingDetail(DeleteBookingDetailRequest request) {

        Integer customerId = SecurityUtil.getCurrentUserId();

        BookingReservation reservation = getPendingReservation(
                request.getBookingReservationId(),
                customerId
        );

        BookingDetailId id = new BookingDetailId(
                request.getBookingReservationId(),
                request.getRoomId()
        );

        BookingDetail detail = bookingDetailRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Booking detail not found"));

        bookingDetailRepo.delete(detail);

        recalculateTotalPrice(reservation);

        return "Deletion succeeded";
    }

    private BookingReservation getPendingReservation(Integer reservationId, Integer customerId) {

        BookingReservation reservation =
                bookingReservationRepo
                        .findByBookingReservationIdAndCustomer_CustomerId(
                                reservationId,
                                customerId
                        )
                        .orElseThrow(() -> new IllegalArgumentException("Reservation not found"));

        if (reservation.getBookingStatus() != BookingStatus.PENDING) {
            throw new IllegalStateException("Only PENDING reservation can be modified");
        }

        return reservation;
    }

    private void recalculateTotalPrice(BookingReservation reservation) {

        List<BookingDetail> details =
                bookingDetailRepo
                        .findByBookingReservation_BookingReservationId(
                                reservation.getBookingReservationId()
                        );

        double total = details.stream()
                .mapToDouble(BookingDetail::getActualPrice)
                .sum();

        reservation.setTotalPrice(total);
        bookingReservationRepo.save(reservation);
    }

    private BookingDetailResponse toResponse(BookingDetail detail) {
        return new BookingDetailResponse(
                detail.getRoomInformation().getRoomId(),
                detail.getStartDate(),
                detail.getEndDate(),
                detail.getActualPrice()
        );
    }
}