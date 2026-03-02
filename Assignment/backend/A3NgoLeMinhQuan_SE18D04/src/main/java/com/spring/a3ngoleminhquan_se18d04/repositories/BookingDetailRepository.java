package com.spring.a3ngoleminhquan_se18d04.repositories;

import com.spring.a3ngoleminhquan_se18d04.entities.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public interface BookingDetailRepository extends JpaRepository<BookingDetail, BookingDetailId> {
    List<BookingDetail> findByBookingReservation_BookingReservationId(Integer bookingReservationId);

    List<BookingDetail> findByBookingReservation_BookingReservationIdAndBookingReservation_Customer_CustomerId(Integer bookingReservationId, Integer customerId);
}
