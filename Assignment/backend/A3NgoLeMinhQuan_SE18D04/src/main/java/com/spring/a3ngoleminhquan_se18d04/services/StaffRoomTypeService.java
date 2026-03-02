package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;
import java.util.*;

public interface StaffRoomTypeService {
    public List<RoomTypeResponse> getAllRoomTypes();

    public RoomTypeResponse getRoomTypeById(Integer roomTypeId);

    public RoomTypeResponse addRoomType(AddRoomTypeRequest request);

    public RoomTypeResponse updateRoomType(Integer roomTypeId, UpdateRoomTypeRequest request);

    public String deleteRoomType(Integer roomTypeId);
}
