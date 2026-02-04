package com.spring.a2ngoleminhquan_se18d04.services;

import com.spring.a2ngoleminhquan_se18d04.entities.*;
import com.spring.a2ngoleminhquan_se18d04.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class CategoryService implements ICategoryService {
    @Autowired
    private CategoryRepository categoryRepo;

    @Autowired
    private NewsArticleRepository newsArticleRepo;

    @Override
    public List<Category> getAllCategories() { return categoryRepo.findAll(); }

    @Override
    public Category getCategoryById(Integer categoryId) {
        return categoryRepo.findById(categoryId).orElse(null);
    }

    @Override
    public Category addCategory(Category c) { return categoryRepo.save(c); }

    @Override
    public Category updateCategory(Integer categoryId, Category c) {
        Category ca = categoryRepo.findById(categoryId).orElse(null);

        if (ca != null) {
            ca.setCategoryName(c.getCategoryName());
            ca.setCategoryDescription(c.getCategoryDescription());
            ca.setParentCategory(c.getParentCategory());
            ca.setIsActive(c.getIsActive());

            return categoryRepo.save(ca);
        }

        return null;
    }

    @Transactional
    @Override
    public String deleteCategory(Integer categoryId)
    {
        Category c = getCategoryById(categoryId);

        if (c != null)
        {
            if (!newsArticleRepo.existsByNewsCategory(c))
            {
                List<Category> childCategories = categoryRepo.getCategoriesByParentCategory(c);

                for (Category ca : childCategories) ca.setParentCategory(null);

                categoryRepo.delete(c);

                return "Deletion succeeded";
            }
        }

        return "Deletion failed";
    }
}
