package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.RoomType;
import com.spring.a3ngoleminhquan_se18d04.repositories.RoomTypeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StaffRoomTypeServiceImpl implements StaffRoomTypeService{
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

    @Override
    public RoomTypeResponse addRoomType(AddRoomTypeRequest request) {
        RoomType roomType = new RoomType();
        roomType.setRoomTypeName(request.getRoomTypeName());
        roomType.setTypeDescription(request.getTypeDescription());
        roomType.setTypeNote(request.getTypeNote());

        RoomType saved = roomTypeRepo.save(roomType);

        return toRoomTypeResponse(saved);
    }

    public RoomTypeResponse updateRoomType(Integer roomTypeId, UpdateRoomTypeRequest request) {
        RoomType roomType = roomTypeRepo.findById(roomTypeId)
                .orElseThrow(() -> new IllegalArgumentException("Room type not found"));

        roomType.setRoomTypeName(request.getRoomTypeName());
        roomType.setTypeDescription(request.getTypeDescription());
        roomType.setTypeNote(request.getTypeNote());

        RoomType saved = roomTypeRepo.save(roomType);

        return toRoomTypeResponse(saved);
    }

    public String deleteRoomType(Integer roomTypeId) {
        RoomType roomType = roomTypeRepo.findById(roomTypeId)
                .orElseThrow(() -> new IllegalArgumentException("Room type not found"));

        if (!roomType.getRooms().isEmpty()) throw new IllegalArgumentException("Room type is currently used");

        roomTypeRepo.delete(roomType);

        return "Deletion succeeded";
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
