package com.example.slot15.service;

import com.example.slot15.entity.Product;
import java.util.*;

public interface IProductService {
    public Product saveProduct(Product p);

    public List<Product> getProducts();

    public Product getProductById(int id);

    public String deleteProduct(int id);

    public Product updateProduct(Product p);
}
