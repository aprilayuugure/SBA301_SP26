package com.spring.a3ngoleminhquan_se18d04.dtos.response;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class RoomTypeResponse {
    private int roomTypeId;

    private String roomTypeName;

    private String typeDescription;

    private String typeNote;
}
