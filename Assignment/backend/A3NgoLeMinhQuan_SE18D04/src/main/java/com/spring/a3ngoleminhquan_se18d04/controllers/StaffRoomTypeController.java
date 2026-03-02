package com.spring.a3ngoleminhquan_se18d04.controllers;

import com.spring.a3ngoleminhquan_se18d04.dtos.request.*;
import com.spring.a3ngoleminhquan_se18d04.dtos.response.RoomTypeResponse;
import com.spring.a3ngoleminhquan_se18d04.services.StaffRoomTypeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/room-types")
@RestController
public class StaffRoomTypeController {
    private final StaffRoomTypeService staffRoomTypeService;

    @GetMapping
    public ResponseEntity<List<RoomTypeResponse>> getAllRoomTypes() {
        return ResponseEntity.ok(staffRoomTypeService.getAllRoomTypes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomTypeResponse> getRoomTypeById(@PathVariable Integer id) {
        return ResponseEntity.ok(staffRoomTypeService.getRoomTypeById(id));
    }

    @PostMapping
    public ResponseEntity<RoomTypeResponse> addRoomType(@Valid @RequestBody AddRoomTypeRequest request) {
        return ResponseEntity.ok(staffRoomTypeService.addRoomType(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<RoomTypeResponse> updateRoomType(@PathVariable Integer id,
                                                           @Valid @RequestBody UpdateRoomTypeRequest request)
    {
        return ResponseEntity.ok(staffRoomTypeService.updateRoomType(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoomType(@PathVariable Integer id) {
        return ResponseEntity.ok(staffRoomTypeService.deleteRoomType(id));
    }
}
