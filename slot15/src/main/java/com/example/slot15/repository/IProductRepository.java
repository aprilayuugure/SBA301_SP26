package com.example.slot15.repository;

import com.example.slot15.entity.Product;
import java.util.*;

public interface IProductRepository {
    public List<Product> getAllProducts();

    public Product findById(int id);

    public List<Product> search(String name);

    public Product save(Product p);

    public String deleteById(int id);

    public Product update(Product p);
}
