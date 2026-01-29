package com.example.lab4_new.pojos;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;

import java.io.Serializable;

@Entity
@Table(name = "orchids")
public class Orchid implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orchid_id")
    private int id;

    @NotBlank(message = "Name cannot be null")
    @Column(name = "orchid_name")
    private String name;

    @Column(name = "orchid_image")
    private String image;

    @NotNull(message = "Please choose a category")
    @ManyToOne
    @JoinColumn(name = "category_id")
    @JsonManagedReference
    private Category category;

    @Column(name = "orchid_description")
    private String description;

    @JsonProperty("isSpecial")
    @Column(name = "is_special", columnDefinition = "bit default 0")
    private boolean isSpecial;

    @Positive(message = "Price must be greater than 0.00")
    @Column(name = "orchid_price")
    private double price;

    public Orchid() {}

    public Orchid(String name, String image, Category category, String description, boolean isSpecial, double price) {
        this.name = name;
        this.image = image;
        this.category = category;
        this.description = description;
        this.isSpecial = isSpecial;
        this.price = price;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @JsonProperty("isSpecial")
    public boolean getIsSpecial() {
        return isSpecial;
    }

    @JsonProperty("isSpecial")
    public void setIsSpecial(boolean special) {
        isSpecial = special;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
