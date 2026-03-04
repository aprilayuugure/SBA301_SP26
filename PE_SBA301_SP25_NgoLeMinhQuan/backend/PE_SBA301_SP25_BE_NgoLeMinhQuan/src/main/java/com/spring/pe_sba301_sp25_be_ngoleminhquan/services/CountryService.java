package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.CountryRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CountryResponse;

import java.util.List;

public interface CountryService {
    public List<CountryResponse> getAllCountries();

    public CountryResponse getCountryById(Integer countryId);

    public CountryResponse addCountry(CountryRequest request);

    public CountryResponse updateCountry(Integer countryId, CountryRequest request);

    public String deleteCountry(Integer countryId);
}
