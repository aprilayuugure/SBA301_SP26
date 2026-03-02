package com.spring.a3ngoleminhquan_se18d04.dtos.response;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RoomInformationResponse {
    private Integer roomId;

    private int roomNumber;

    private String roomDetailDescription;

    private int roomMaxCapacity;

    private RoomTypeResponse roomType;

    private double roomPricePerDay;

}
