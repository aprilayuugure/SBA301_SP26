package com.spring.a3ngoleminhquan_se18d04.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring.a3ngoleminhquan_se18d04.enums.BookingStatus;
import jakarta.persistence.*;
import lombok.*;
import java.util.*;
import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "booking_reservations")
public class BookingReservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_reservation_id")
    private Integer bookingReservationId;

    @Column(name = "booking_date")
    private LocalDate bookingDate;

    @Column(name = "total_price")
    private double totalPrice;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "booking_status")
    private BookingStatus bookingStatus;

    @JsonIgnore
    @OneToMany(mappedBy = "bookingReservation")
    private List<BookingDetail> bookingDetails;

    @Override
    public String toString() {
        return "Booking reservation ID: " + bookingReservationId + '\n'
                + "Booking date: " + bookingDate + '\n'
                + "Total price: " + totalPrice + '\n'
                + "Customer: " + customer.getCustomerFullName() + '\n'
                + "Booking status: " + bookingStatus.toString() + '\n';
    }
}
