package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.RoomType;
import com.spring.a3ngoleminhquan_se18d04.repositories.RoomTypeRepository;
import lombok.*;
import org.springframework.stereotype.Service;
import java.util.*;

@RequiredArgsConstructor
@Service
public class UserRoomTypeServiceImpl implements UserRoomTypeService {
    private final RoomTypeRepository roomTypeRepo;

    @Override
    public List<RoomTypeResponse> getAllRoomTypes() {
        return roomTypeRepo.findAll()
                .stream()
                .map(this::toRoomTypeResponse)
                .toList();
    }

    @Override
    public RoomTypeResponse getRoomTypeById(Integer roomTypeId) {
        return roomTypeRepo.findById(roomTypeId).map(this::toRoomTypeResponse)
                           .orElseThrow(() -> new IllegalArgumentException("Room type not found"));
    }

    private RoomTypeResponse toRoomTypeResponse(RoomType roomType) {
        return new RoomTypeResponse(
            roomType.getRoomTypeId(),
            roomType.getRoomTypeName(),
            roomType.getTypeDescription(),
            roomType.getTypeNote()
        );
    }
}
