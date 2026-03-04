package com.spring.pe_sba301_sp25_be_ngoleminhquan.controllers;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.CountryRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CountryResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.services.CountryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/countries")
@RestController
public class CountryController {
    private final CountryService countryService;

    @GetMapping
    public ResponseEntity<List<CountryResponse>> getAllRoomTypes() {
        return ResponseEntity.ok(countryService.getAllCountries());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CountryResponse> getCountryById(@PathVariable Integer id) {
        return ResponseEntity.ok(countryService.getCountryById(id));
    }

    @PostMapping
    public ResponseEntity<CountryResponse> addCountry(@Valid @RequestBody CountryRequest request) {
        return ResponseEntity.ok(countryService.addCountry(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CountryResponse> updateCountry(@PathVariable Integer id,
                                                         @Valid @RequestBody CountryRequest request)
    {
        return ResponseEntity.ok(countryService.updateCountry(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRoomType(@PathVariable Integer id) {
        return ResponseEntity.ok(countryService.deleteCountry(id));
    }
}
