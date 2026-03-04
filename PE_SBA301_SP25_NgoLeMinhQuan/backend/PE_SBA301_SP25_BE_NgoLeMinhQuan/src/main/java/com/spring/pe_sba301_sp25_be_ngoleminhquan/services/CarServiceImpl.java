package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.CarRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.*;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Car;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Country;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.CarRepository;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CarServiceImpl implements CarService {
    private final CarRepository carRepo;

    private final CountryRepository countryRepo;

    @Override
    public List<CarResponse> getAllCars() {
        return carRepo.findAllByOrderByCreatedAtDesc()
                .stream()
                .map(this::toCarResponse)
                .toList();
    }

    @Override
    public CarResponse getCarById(Integer carId) {
        return carRepo.findById(carId).map(this::toCarResponse)
                .orElseThrow(() -> new RuntimeException("Car not found"));
    }

    @Override
    public CarResponse addCar(CarRequest request) {
        Country country = countryRepo.findById(request.getCountryId())
                .orElseThrow(() -> new IllegalArgumentException("Country not found"));

        Car c = new Car();
        c.setCarName(request.getCarName());
        c.setCountry(country);
        c.setUnitsInStock(request.getUnitsInStock());
        c.setUnitPrice(request.getUnitPrice());
        c.setCreatedAt(LocalDate.now());
        c.setUpdatedAt(LocalDate.now());

        Car saved = carRepo.save(c);

        return toCarResponse(saved);
    }

    @Override
    public CarResponse updateCar(Integer carId, CarRequest request) {
        Car c = carRepo.findById(carId)
                        .orElseThrow(() -> new RuntimeException("Car not found"));

        Country country = countryRepo.findById(request.getCountryId())
                .orElseThrow(() -> new IllegalArgumentException("Country not found"));

        c.setCarName(request.getCarName());
        c.setCountry(country);
        c.setUnitsInStock(request.getUnitsInStock());
        c.setUnitPrice(request.getUnitPrice());
        c.setUpdatedAt(LocalDate.now());

        Car saved = carRepo.save(c);

        return toCarResponse(saved);
    }

    @Override
    public String deleteCar(Integer carId) {
        Car c = carRepo.findById(carId)
                .orElseThrow(() -> new RuntimeException("Car not found"));

        c.getCountry().getCars().remove(c);

        carRepo.delete(c);

        return "Deletion succeeded";
    }

    private CarResponse toCarResponse(Car c) {
        return new CarResponse(
                c.getCarId(),
                c.getCarName(),
                toCountryResponse(c.getCountry()),
                c.getUnitsInStock(),
                c.getUnitPrice(),
                c.getCreatedAt(),
                c.getUpdatedAt()
        );
    }

    private CountryResponse toCountryResponse(Country c) {
        return new CountryResponse(
                c.getCountryId(),
                c.getCountryName()
        );
    }
}
