package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CountryResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Country;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.*;

@RequiredArgsConstructor
@Service
public class MemberCountryServiceImpl implements MemberCountryService {
    private final CountryRepository countryRepo;

    @Override
    public List<CountryResponse> getAllCountries() {
        return countryRepo.findAll()
                .stream()
                .map(this::toCountryResponse)
                .toList();
    }

    @Override
    public CountryResponse getCountryById(Integer countryId) {
        return countryRepo.findById(countryId).map(this::toCountryResponse)
                          .orElseThrow(() -> new RuntimeException("Country not found"));
    }

    private CountryResponse toCountryResponse(Country c) {
        return new CountryResponse(
                c.getCountryId(),
                c.getCountryName()
        );
    }
}
