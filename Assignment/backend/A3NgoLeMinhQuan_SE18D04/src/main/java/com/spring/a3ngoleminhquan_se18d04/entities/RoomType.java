package com.spring.a3ngoleminhquan_se18d04.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import java.util.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "room_types")
public class RoomType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_type_id")
    private Integer roomTypeId;

    @Column(name = "room_type_name")
    private String roomTypeName;

    @Column(name = "type_description")
    private String typeDescription;

    @Column(name = "type_note")
    private String typeNote;

    @JsonIgnore
    @OneToMany(mappedBy = "roomType")
    private List<RoomInformation> rooms;

    @Override
    public String toString() {
        return "Room type ID: " + roomTypeId + '\n'
                + "Room type name: " + roomTypeName + '\n'
                + "Type description: " +  typeDescription + '\n'
                + "Type note: " + typeNote + '\n';
    }
}
