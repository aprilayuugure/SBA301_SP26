package com.example.lab4_new.controllers;

import com.example.lab4_new.pojos.Category;
import com.example.lab4_new.services.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@CrossOrigin
@RestController
@RequestMapping
public class CategoryController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping("/categories")
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(iCategoryService.getAllCategories());
    }
}
