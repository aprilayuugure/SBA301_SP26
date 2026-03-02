package com.spring.a3ngoleminhquan_se18d04.controllers;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomInformationResponse;
import com.spring.a3ngoleminhquan_se18d04.services.StaffRoomInformationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/rooms")
@RestController
public class StaffRoomInformationController {
    private final StaffRoomInformationService staffRoomInformationService;

    @GetMapping
    public ResponseEntity<List<RoomInformationResponse>> getAllRoomTypes() {
        return ResponseEntity.ok(staffRoomInformationService.getAllRooms());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomInformationResponse> getRoomTypeById(@PathVariable Integer id) {
        return ResponseEntity.ok(staffRoomInformationService.getRoomById(id));
    }

    @PostMapping
    public ResponseEntity<RoomInformationResponse> addRoomType(@Valid @RequestBody AddRoomInformationRequest request) {
        return ResponseEntity.ok(staffRoomInformationService.addRoom(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoomInformationResponse> updateRoomType(@PathVariable Integer id,
                                                           @Valid @RequestBody UpdateRoomInformationRequest request)
    {
        return ResponseEntity.ok(staffRoomInformationService.updateRoom(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoomType(@PathVariable Integer id) {
        return ResponseEntity.ok(staffRoomInformationService.deleteRoom(id));
    }
}
