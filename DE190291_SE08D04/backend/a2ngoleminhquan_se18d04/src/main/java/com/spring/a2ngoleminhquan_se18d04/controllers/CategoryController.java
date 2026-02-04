package com.spring.a2ngoleminhquan_se18d04.controllers;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private ICategoryService iCategoryService;

    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        return ResponseEntity.ok(iCategoryService.getAllCategories());
    }

    @GetMapping("/{categoryId}")
    public ResponseEntity<Category> getCategoryById(@PathVariable Integer categoryId) {
        return ResponseEntity.ok(iCategoryService.getCategoryById(categoryId));
    }

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public Category saveCategory(@RequestBody Category c) {
        return iCategoryService.addCategory(c);
    }

    @PutMapping("/{categoryId}/update")
    public ResponseEntity<Category> updateTag(@PathVariable Integer categoryId, @RequestBody Category c) {
        return ResponseEntity.ok(iCategoryService.updateCategory(categoryId, c));
    }

    @DeleteMapping("/{categoryId}/delete")
    public ResponseEntity<String> deleteCategory(@PathVariable Integer categoryId) {
        return ResponseEntity.ok(iCategoryService.deleteCategory(categoryId));
    }
}
