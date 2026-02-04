package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.Category;

import java.util.*;

public interface ICategoryService {
    public List<Category> getAllCategories();

    public Category getCategoryById(Integer categoryId);

    public Category addCategory(Category c);

    public Category updateCategory(Integer categoryId, Category c);

    public String deleteCategory(Integer categoryId);
}
