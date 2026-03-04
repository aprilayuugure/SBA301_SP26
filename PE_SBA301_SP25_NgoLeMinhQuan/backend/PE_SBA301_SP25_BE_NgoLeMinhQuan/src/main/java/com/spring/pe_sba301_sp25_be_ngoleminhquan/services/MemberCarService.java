package com.spring.pe_sba301_sp25_be_ngoleminhquan.services;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.dtos.responses.MemberCarResponse;

import java.util.List;

public interface MemberCarService {
    public List<MemberCarResponse> getAllCars();

    public MemberCarResponse getCarById(Integer carId);
}
