package com.spring.a3ngoleminhquan_se18d04.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.spring.a3ngoleminhquan_se18d04.enums.RoomStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "room_informations")
public class RoomInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Integer roomId;

    @Column(name = "room_number")
    private int roomNumber;

    @Column(name = "room_detail_description")
    private String roomDetailDescription;

    @Column(name = "room_max_capacity")
    private int roomMaxCapacity;

    @ManyToOne
    @JoinColumn(name = "room_type_id")
    private RoomType roomType;

    @Enumerated(EnumType.ORDINAL)
    @Column(name = "room_status")
    private RoomStatus roomStatus;

    @Column(name = "room_price_per_day")
    private double roomPricePerDay;

    @JsonIgnore
    @OneToMany(mappedBy = "roomInformation")
    private List<BookingDetail> bookingDetails;

    @Override
    public String toString() {
        return "Room ID: " + roomId + '\n'
                + "Room number: " + roomNumber + '\n'
                + "Room detail description: " + roomDetailDescription + '\n'
                + "Room max capacity: " + roomMaxCapacity + '\n'
                + "Room type: " + roomType.getRoomTypeName() + '\n'
                + "Room status: " + roomStatus.toString() + '\n'
                + "Room price per day: " + roomPricePerDay + '\n';
    }
}
