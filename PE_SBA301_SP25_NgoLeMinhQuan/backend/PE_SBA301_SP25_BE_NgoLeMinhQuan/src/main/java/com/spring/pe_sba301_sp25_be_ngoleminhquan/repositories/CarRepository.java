package com.spring.pe_sba301_sp25_be_ngoleminhquan.repositories;

import com.spring.pe_sba301_sp25_be_ngoleminhquan.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car, Integer> {
    List<Car> findAllByOrderByCreatedAtDesc();
}
