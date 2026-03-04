package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.requests.CarRequest;
import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.CarResponse;

import java.util.List;

public interface CarService {
    public List<CarResponse> getAllCars();

    public CarResponse getCarById(Integer carId);

    public CarResponse addCar(CarRequest request);

    public CarResponse updateCar(Integer carId, CarRequest request);

    public String deleteCar(Integer carId);
}
