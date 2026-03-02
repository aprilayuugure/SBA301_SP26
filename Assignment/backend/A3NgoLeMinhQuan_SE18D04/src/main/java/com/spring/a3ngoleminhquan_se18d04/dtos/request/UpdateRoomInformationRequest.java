package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UpdateRoomInformationRequest {
    private int roomNumber;

    private String roomDetailDescription;

    @Min(value = 1, message = "Room max capacity must be at least 1")
    @Max(value = 10, message = "Room max capacity must not exceed 10")
    private int roomMaxCapacity;

    @NotNull(message = "Room type ID cannot be null")
    private Integer roomTypeId;

    @DecimalMin(value = "0.0", inclusive = false,
            message = "Room price per day must be greater than 0")
    private double roomPricePerDay;
}
