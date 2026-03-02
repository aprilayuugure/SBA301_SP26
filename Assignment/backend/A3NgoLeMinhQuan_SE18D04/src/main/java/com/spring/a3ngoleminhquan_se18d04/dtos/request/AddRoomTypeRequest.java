package com.spring.a3ngoleminhquan_se18d04.dtos.request;

import jakarta.validation.constraints.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class AddRoomTypeRequest {
    @NotBlank(message = "Room type name cannot be null")
    private String roomTypeName;

    private String typeDescription;

    private String typeNote;
}
