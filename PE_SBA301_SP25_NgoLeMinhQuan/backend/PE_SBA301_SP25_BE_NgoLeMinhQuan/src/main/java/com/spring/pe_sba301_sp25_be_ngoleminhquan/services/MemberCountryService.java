package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CountryResponse;
import java.util.*;

public interface MemberCountryService {
    public List<CountryResponse> getAllCountries();

    public CountryResponse getCountryById(Integer countryId);
}
