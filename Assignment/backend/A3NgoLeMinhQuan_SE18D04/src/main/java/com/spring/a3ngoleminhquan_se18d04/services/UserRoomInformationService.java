package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomInformationResponse;

import java.util.*;

public interface UserRoomInformationService {
    public List<RoomInformationResponse> getAllRooms();

    public RoomInformationResponse getRoomById(Integer roomId);
}
