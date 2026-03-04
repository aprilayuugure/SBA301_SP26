package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.CountryRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CountryResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Country;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CountryServiceImpl implements CountryService {
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

    @Override
    public CountryResponse addCountry(CountryRequest request) {
        Country c = new Country();
        c.setCountryName(request.getCountryName());

        Country saved = countryRepo.save(c);

        return toCountryResponse(saved);
    }

    @Override
    public CountryResponse updateCountry(Integer countryId, CountryRequest request) {
        Country c = countryRepo.findById(countryId)
                .orElseThrow(() -> new RuntimeException("Country not found"));

        c.setCountryName(request.getCountryName());

        Country saved = countryRepo.save(c);

        return toCountryResponse(saved);
    }

    @Override
    public String deleteCountry(Integer countryId) {
        Country c = countryRepo.findById(countryId)
                .orElseThrow(() -> new RuntimeException("Country not found"));

        if (!c.getCars().isEmpty()) throw new IllegalArgumentException("Country is being used. Deletion failed");

        countryRepo.delete(c);

        return "Deletion succeeded";
    }

    private CountryResponse toCountryResponse(Country c) {
        return new CountryResponse(
                c.getCountryId(),
                c.getCountryName()
        );
    }
}
