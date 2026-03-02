package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomInformationResponse;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.*;
import com.spring.a3ngoleminhquan_se18d04.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class StaffRoomInformationServiceImpl implements StaffRoomInformationService{
    private final RoomInformationRepository roomInformationRepo;
    private final RoomTypeRepository roomTypeRepo;

    @Override
    public List<RoomInformationResponse> getAllRooms() {
        return roomInformationRepo.findAll()
                .stream()
                .map(this::toRoomInformationResponse)
                .toList();
    }

    @Override
    public RoomInformationResponse getRoomById(Integer roomId) {
        return roomInformationRepo.findById(roomId).map(this::toRoomInformationResponse)
                .orElseThrow(() -> new IllegalArgumentException("Room not found"));
    }

    @Override
    public RoomInformationResponse addRoom(AddRoomInformationRequest request) {
        RoomType roomType = roomTypeRepo.findById(request.getRoomTypeId())
                .orElseThrow(() -> new IllegalArgumentException("Room type ID not found"));

        RoomInformation roomInformation = new RoomInformation();
        roomInformation.setRoomNumber(request.getRoomNumber());
        roomInformation.setRoomDetailDescription(request.getRoomDetailDescription());
        roomInformation.setRoomMaxCapacity(request.getRoomMaxCapacity());
        roomInformation.setRoomType(roomType);
        roomInformation.setRoomPricePerDay(request.getRoomPricePerDay());

        RoomInformation saved = roomInformationRepo.save(roomInformation);

        return toRoomInformationResponse(saved);
    }

    @Override
    public RoomInformationResponse updateRoom(Integer roomId, UpdateRoomInformationRequest request) {
        RoomInformation roomInformation = roomInformationRepo.findById(roomId)
                .orElseThrow(() -> new IllegalArgumentException("Room not found"));

        RoomType roomType = roomTypeRepo.findById(request.getRoomTypeId())
                .orElseThrow(() -> new IllegalArgumentException("Room type ID not found"));

        roomInformation.setRoomNumber(request.getRoomNumber());
        roomInformation.setRoomDetailDescription(request.getRoomDetailDescription());
        roomInformation.setRoomMaxCapacity(request.getRoomMaxCapacity());
        roomInformation.setRoomType(roomType);
        roomInformation.setRoomPricePerDay(request.getRoomPricePerDay());

        RoomInformation saved = roomInformationRepo.save(roomInformation);

        return toRoomInformationResponse(saved);
    }

    @Override
    public String deleteRoom(Integer roomId) {
        RoomInformation roomInformation = roomInformationRepo.findById(roomId)
                .orElseThrow(() -> new IllegalArgumentException("Room not found"));

        if (!roomInformation.getBookingDetails().isEmpty()) throw new IllegalArgumentException("Room is currently used");

        roomInformationRepo.delete(roomInformation);

        return "Deletion succeeded";
    }

    private RoomInformationResponse toRoomInformationResponse(RoomInformation roomInformation) {
        RoomTypeResponse roomTypeResponse = new RoomTypeResponse(
                roomInformation.getRoomType().getRoomTypeId(),
                roomInformation.getRoomType().getRoomTypeName(),
                roomInformation.getRoomType().getTypeDescription(),
                roomInformation.getRoomType().getTypeNote());

        return new RoomInformationResponse(
                roomInformation.getRoomId(),
                roomInformation.getRoomNumber(),
                roomInformation.getRoomDetailDescription(),
                roomInformation.getRoomMaxCapacity(),
                roomTypeResponse,
                roomInformation.getRoomPricePerDay()
        );
    }
}
