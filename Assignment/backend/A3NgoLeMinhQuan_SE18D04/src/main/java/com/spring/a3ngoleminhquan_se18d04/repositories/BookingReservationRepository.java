package com.spring.a3ngoleminhquan_se18d04.repositories;

import com.spring.a3ngoleminhquan_se18d04.entities.BookingReservation;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.*;

public interface BookingReservationRepository extends JpaRepository<BookingReservation, Integer> {
    List<BookingReservation> findByCustomer_CustomerId(Integer customerId);

    Optional<BookingReservation> findByBookingReservationIdAndCustomer_CustomerId(Integer bookingReservationId, Integer customerId);
}
