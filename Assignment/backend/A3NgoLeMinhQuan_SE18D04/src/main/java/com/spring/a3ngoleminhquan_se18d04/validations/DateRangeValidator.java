package com.spring.a3ngoleminhquan_se18d04.validations;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.DateRangeRequest;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class DateRangeValidator implements ConstraintValidator<ValidDateRange, DateRangeRequest> {
    @Override
    public boolean isValid(DateRangeRequest request, ConstraintValidatorContext context) {
        if (request.getStartDate() == null || request.getEndDate() == null) return true;

        return request.getEndDate().isAfter(request.getStartDate());
    }
}
