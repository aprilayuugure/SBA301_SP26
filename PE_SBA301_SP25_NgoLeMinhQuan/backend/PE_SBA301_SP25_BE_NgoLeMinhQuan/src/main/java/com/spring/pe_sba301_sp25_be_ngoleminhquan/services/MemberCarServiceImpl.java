package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CountryResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.MemberCarResponse;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Car;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Country;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MemberCarServiceImpl implements MemberCarService {
    private final CarRepository carRepo;

    @Override
    public List<MemberCarResponse> getAllCars() {
        return carRepo.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::toMemberCarResponse)
                .toList();
    }

    @Override
    public MemberCarResponse getCarById(Integer carId) {
        return carRepo.findById(carId).map(this::toMemberCarResponse)
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }

    private MemberCarResponse toMemberCarResponse(Car c) {
        return new MemberCarResponse(
                c.getCarId(),
                c.getCarName(),
                toCountryResponse(c.getCountry()),
                c.getUnitsInStock(),
                c.getUnitPrice()
        );
    }

    private CountryResponse toCountryResponse(Country c) {
        return new CountryResponse(
                c.getCountryId(),
                c.getCountryName()
        );
    }
}
