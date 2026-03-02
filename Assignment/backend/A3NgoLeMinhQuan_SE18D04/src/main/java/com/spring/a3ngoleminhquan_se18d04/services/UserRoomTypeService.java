package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;

import java.util.*;

public interface UserRoomTypeService {
    List<RoomTypeResponse> getAllRoomTypes();

    RoomTypeResponse getRoomTypeById(Integer roomTypeId);
}
