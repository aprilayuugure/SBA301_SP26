package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.BookingDetailResponse;
import java.util.*;

public interface UserBookingDetailService {
    public List<BookingDetailResponse> getBookingDetails(Integer bookingReservationId);

    public BookingDetailResponse addBookingDetail(AddBookingDetailRequest request);

    public BookingDetailResponse updateBookingDetail(UpdateBookingDetailRequest request);

    public String deleteBookingDetail(DeleteBookingDetailRequest request);
}
