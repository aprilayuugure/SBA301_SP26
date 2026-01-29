package com.example.lab4_new.pojos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name = "Categories")
public class Category implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "category_id")
    private int id;

    @Column(name = "category_name")
    private String name;

    @OneToMany(mappedBy = "category")
    @JsonBackReference
    private List<Orchid> orchids;

    public Category() {}

    public Category(String name, List<Orchid> orchids) {
        this.name = name;
        this.orchids = orchids;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Orchid> getOrchids() {
        return orchids;
    }

    public void setOrchids(List<Orchid> orchids) {
        this.orchids = orchids;
    }
}
