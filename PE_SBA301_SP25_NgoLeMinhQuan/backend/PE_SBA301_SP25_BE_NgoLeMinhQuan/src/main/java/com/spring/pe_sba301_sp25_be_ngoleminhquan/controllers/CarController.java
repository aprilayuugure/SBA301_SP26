package com.spring.pe_sba301_sp25_be_ngoleminhquan.controllers;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.CarRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CarResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.services.CarService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/cars")
@RestController
public class CarController {
    private final CarService carService;

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping
    public ResponseEntity<List<CarResponse>> getAllCars() {
        return ResponseEntity.ok(carService.getAllCars());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<CarResponse> getCarById(@PathVariable Integer id) {
        return ResponseEntity.ok(carService.getCarById(id));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping
    public ResponseEntity<CarResponse> addCar(@Valid @RequestBody CarRequest request) {
        return ResponseEntity.ok(carService.addCar(request));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping("/{id}")
    public ResponseEntity<CarResponse> updateCountry(@PathVariable Integer id,
                                                     @Valid @RequestBody CarRequest request)
    {
        return ResponseEntity.ok(carService.updateCar(id, request));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Integer id) {
        return ResponseEntity.ok(carService.deleteCar(id));
    }
}
