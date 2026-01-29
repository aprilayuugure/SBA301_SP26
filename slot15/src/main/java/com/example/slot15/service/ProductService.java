package com.example.slot15.service;

import com.example.slot15.entity.Product;
import com.example.slot15.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ProductService implements IProductService {
    @Autowired
    private ProductRepository iProductRepo;

    public Product saveProduct(Product p) { return iProductRepo.save(p); }

    public List<Product> getProducts() { return iProductRepo.getAllProducts(); }

    public Product getProductById(int id) { return iProductRepo.findById(id); }

    public String deleteProduct(int id) {
        iProductRepo.deleteById(id);

        return "Product removed";
    }

    public Product updateProduct(Product p) { return iProductRepo.update(p); }
}
