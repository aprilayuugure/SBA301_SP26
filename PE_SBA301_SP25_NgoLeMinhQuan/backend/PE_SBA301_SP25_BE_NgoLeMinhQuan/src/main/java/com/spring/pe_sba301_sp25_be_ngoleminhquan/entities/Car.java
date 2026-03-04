package com.spring.pe_sba301_sp25_be_ngoleminhquan.entities;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.cglib.core.Local;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "car_id")
    private Integer carId;

    @Column(name = "car_name")
    private String carName;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

    @Column(name = "units_in_stock")
    private int unitsInStock;

    @Column(name = "unit_price")
    private int unitPrice;

    @Column(name = "created_at")
    private LocalDate createdAt;

    @Column(name = "updated_at")
    private LocalDate updatedAt;

}
