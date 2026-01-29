package com.example.lab4_new.repositories;

import com.example.lab4_new.pojos.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Integer> {
}
