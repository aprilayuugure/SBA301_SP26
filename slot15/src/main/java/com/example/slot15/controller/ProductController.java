package com.example.slot15.controller;

import com.example.slot15.entity.Product;
import com.example.slot15.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    @Autowired
    private IProductService iProductService;

    @PostMapping
    public Product addProduct(@RequestBody Product p) { return iProductService.saveProduct(p); }

    @GetMapping
    public List<Product> getAllProducts() { return iProductService.getProducts(); }

    @GetMapping("{id}")
    public Product findProductById(@PathVariable int id) { return iProductService.getProductById(id); }

    @PutMapping
    public Product updateProduct(@RequestBody Product p) { return iProductService.updateProduct(p); }

    @DeleteMapping("{id}")
    public String deleteProduct(@PathVariable int id) { return iProductService.deleteProduct(id); }

}
