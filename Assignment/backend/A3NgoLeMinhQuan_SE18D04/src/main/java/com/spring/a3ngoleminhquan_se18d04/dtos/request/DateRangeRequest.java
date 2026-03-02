package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import java.time.LocalDate;

public interface DateRangeRequest {
    LocalDate getStartDate();

    LocalDate getEndDate();
}
