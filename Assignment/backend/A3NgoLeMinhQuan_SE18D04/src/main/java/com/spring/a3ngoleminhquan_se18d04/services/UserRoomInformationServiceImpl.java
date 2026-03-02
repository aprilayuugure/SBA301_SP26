package com.spring.a3ngoleminhquan_se18d04.services;

import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomInformationResponse;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;
import com.spring.a3ngoleminhquan_se18d04.entities.RoomInformation;
import com.spring.a3ngoleminhquan_se18d04.repositories.RoomInformationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.*;

@RequiredArgsConstructor
@Service
public class UserRoomInformationServiceImpl implements UserRoomInformationService{
    private final RoomInformationRepository roomInformationRepo;

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
