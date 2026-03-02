package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingDetailResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.*;
import com.spring.a3ngoleminhquan_se18d04.enums.*;
import com.spring.a3ngoleminhquan_se18d04.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.temporal.ChronoUnit;
import java.util.List;

@RequiredArgsConstructor
@Service
public class StaffBookingDetailServiceImpl implements StaffBookingDetailService {
    private final BookingDetailRepository bookingDetailRepo;
    private final BookingReservationRepository bookingReservationRepo;
    private final RoomInformationRepository roomInformationRepo;

    @Override
    public List<BookingDetailResponse> getBookingDetails(Integer bookingReservationId) {
        return bookingDetailRepo.findByBookingReservation_BookingReservationId(bookingReservationId)
                .stream()
                .map(this::toBookingDetailResponse)
                .toList();
    }

    @Transactional
    @Override
    public BookingDetailResponse addBookingDetail(AddBookingDetailRequest request) {
        BookingReservation bookingReservation = bookingReservationRepo.findById(request.getBookingReservationId())
                .orElseThrow(() -> new IllegalArgumentException("Reservation not found"));

        RoomInformation roomInformation = roomInformationRepo.findById(request.getRoomId())
                .orElseThrow(() -> new IllegalArgumentException("Room not found"));

        if (roomInformation.getRoomStatus() == RoomStatus.OCCUPIED) throw new IllegalStateException("Room is occupied");

        if (bookingReservation.getBookingStatus() == BookingStatus.REJECTED) throw new IllegalStateException("Cannot modify rejected reservation");

        BookingDetailId bookingDetailId = new BookingDetailId(request.getBookingReservationId(), request.getRoomId());

        long days = ChronoUnit.DAYS.between(request.getStartDate(), request.getEndDate());

        double actualPrice = days * roomInformation.getRoomPricePerDay();

        BookingDetail bookingDetail = new BookingDetail();
        bookingDetail.setBookingDetailId(bookingDetailId);
        bookingDetail.setBookingReservation(bookingReservation);
        bookingDetail.setRoomInformation(roomInformation);
        bookingDetail.setStartDate(request.getStartDate());
        bookingDetail.setEndDate(request.getEndDate());
        bookingDetail.setActualPrice(actualPrice);

        BookingDetail saved = bookingDetailRepo.save(bookingDetail);

        return toBookingDetailResponse(saved);
    }

    @Transactional
    @Override
    public BookingDetailResponse updateBookingDetail(UpdateBookingDetailRequest request) {
        BookingReservation bookingReservation = bookingReservationRepo.findById(request.getBookingReservationId())
                .orElseThrow(() -> new IllegalArgumentException("Reservation not found"));

        RoomInformation roomInformation = roomInformationRepo.findById(request.getRoomId())
                .orElseThrow(() -> new IllegalArgumentException("Room not found"));

        if (roomInformation.getRoomStatus() == RoomStatus.OCCUPIED) throw new IllegalStateException("Room is occupied");

        if (bookingReservation.getBookingStatus() == BookingStatus.REJECTED) throw new IllegalStateException("Cannot modify rejected reservation");

        BookingDetailId bookingDetailId = new BookingDetailId(request.getBookingReservationId(), request.getRoomId());

        BookingDetail bookingDetail = bookingDetailRepo.findById(bookingDetailId)
                .orElseThrow(() -> new IllegalArgumentException("Booking detail not found"));

        long days = ChronoUnit.DAYS.between(request.getStartDate(), request.getEndDate());

        double actualPrice = days * bookingDetail.getRoomInformation().getRoomPricePerDay();

        bookingDetail.setStartDate(request.getStartDate());
        bookingDetail.setEndDate(request.getEndDate());
        bookingDetail.setActualPrice(actualPrice);

        BookingDetail saved = bookingDetailRepo.save(bookingDetail);

        return toBookingDetailResponse(saved);
    }

    @Transactional
    @Override
    public String deleteBookingDetail(DeleteBookingDetailRequest request) {
        BookingReservation bookingReservation = bookingReservationRepo.findById(request.getBookingReservationId())
                .orElseThrow(() -> new IllegalArgumentException("Reservation not found"));

        if (bookingReservation.getBookingStatus() == BookingStatus.REJECTED) throw new IllegalStateException("Cannot modify rejected reservation");

        BookingDetailId bookingDetailId = new BookingDetailId(request.getBookingReservationId(), request.getRoomId());

        BookingDetail bookingDetail = bookingDetailRepo.findById(bookingDetailId)
                .orElseThrow(() -> new IllegalArgumentException("Booking detail not found"));

        double newTotalPrice = bookingReservation.getTotalPrice() - bookingDetail.getActualPrice();

        bookingReservation.setTotalPrice(Math.max(newTotalPrice, 0));
        bookingReservationRepo.save(bookingReservation);

        RoomInformation roomInformation = bookingDetail.getRoomInformation();
        roomInformation.setRoomStatus(RoomStatus.UNOCCUPIED);
        roomInformationRepo.save(roomInformation);

        bookingDetailRepo.delete(bookingDetail);

        return "Deletion succeeded";
    }

    private BookingDetailResponse toBookingDetailResponse(BookingDetail bookingDetail) {
        return new BookingDetailResponse(
                bookingDetail.getRoomInformation().getRoomId(),
                bookingDetail.getStartDate(),
                bookingDetail.getEndDate(),
                bookingDetail.getActualPrice()
        );
    }
}
