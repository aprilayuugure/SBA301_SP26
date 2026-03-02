package com.spring.a3ngoleminhquan_se18d04.validations;

import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = DateRangeValidator.class)
@Documented
public @interface ValidDateRange {
    String message() default "End date must be before start date";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
