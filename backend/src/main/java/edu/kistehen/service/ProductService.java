package edu.kistehen.service;

import edu.kistehen.model.Product;
import edu.kistehen.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Boolean deleteProduct(String id) {
        productRepository.deleteById(id);
        return true;
    }

    public Collection<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product saveProduct(Product product) {
        return productRepository.saveAndFlush(product);
    }
}
