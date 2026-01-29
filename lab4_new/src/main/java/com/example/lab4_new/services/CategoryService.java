package com.example.lab4_new.services;

import com.example.lab4_new.pojos.Category;
import com.example.lab4_new.repositories.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService implements ICategoryService{
    @Autowired
    private ICategoryRepository iCategoryRepo;

    @Override
    public List<Category> getAllCategories() { return iCategoryRepo.findAll(); }
}
