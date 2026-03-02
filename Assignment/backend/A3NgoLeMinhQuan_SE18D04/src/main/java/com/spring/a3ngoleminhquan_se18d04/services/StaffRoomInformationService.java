package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomInformationResponse;

import java.util.List;

public interface StaffRoomInformationService {
    public List<RoomInformationResponse> getAllRooms();

    public RoomInformationResponse getRoomById(Integer roomId);

    public RoomInformationResponse addRoom(AddRoomInformationRequest request);

    public RoomInformationResponse updateRoom(Integer roomId, UpdateRoomInformationRequest request);

    public String deleteRoom(Integer roomId);
}
