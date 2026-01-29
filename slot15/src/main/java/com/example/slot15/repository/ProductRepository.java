package com.example.slot15.repository;

import com.example.slot15.entity.Product;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.stream.Collectors;

@Repository
public class ProductRepository implements IProductRepository {
    private List<Product> list = new ArrayList<>();

    public List<Product> getAllProducts() {
        return list;
    }

    public Product findById(int id) {
        for (int i = 0; i < list.size(); ++i)
            if (list.get(i).getId() == id) return list.get(i);

        return null;
    }

    public List<Product> search(String name) {
        return list.stream().filter(p -> p.getName().startsWith(name)).collect(Collectors.toList());
    }

    public Product save(Product p) {
        Product product = new Product();
        product.setId(p.getId());
        product.setName(p.getName());
        product.setQuantity(p.getQuantity());
        product.setPrice(p.getPrice());
        list.add(product);

        return product;
    }

    public String deleteById(int id) {
        list.removeIf(p -> p.getId() == id);

        return null;
    }

    public Product update(Product product) {
        int index = 0, id = 0;

        for (int i = 0; i < list.size(); i++) {
            if (list.get(i).getId() == product.getId()) {
                id = product.getId();
                index = i;
                break;
            }
        }
        Product p = new Product();
        p.setId(id);
        p.setName(product.getName());
        p.setQuantity(product.getQuantity());
        p.setPrice(product.getPrice());
        list.set(index, product);

        return p;
    }
}
