package edu.kistehen.controller;


import edu.kistehen.dto.product.ProductShortDto;
import edu.kistehen.dto.product.ProductUploadDto;
import edu.kistehen.mapper.ProductMapper;
import edu.kistehen.service.ProductService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Products")
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class ProductController {
    @Autowired
    private ProductService productService;

    @Autowired
    private ProductMapper productMapper;

    @PostMapping
    public ProductShortDto uploadProduct(@RequestBody ProductUploadDto uploadDto) {
        return productMapper.modelToDto(productService.saveProduct(productMapper.dtoToModel(uploadDto)));
    }

    @GetMapping("/{productId}")
    public ProductShortDto getProduct(@PathVariable("productId") String productId) {
        return new ProductShortDto();
    }

    @GetMapping
    public Collection<ProductShortDto> listProducts() {
        return productMapper.modelsToDtos(productService.getProducts());
    }

    @DeleteMapping("/{productId}")
    public boolean deleteAgent(@PathVariable("productId") String id) {
        return productService.deleteProduct(id);
    }

    @PutMapping("/{productId}")
    public ProductShortDto updateAgent(@PathVariable("productId") String id, @RequestBody ProductUploadDto agent) {
        return new ProductShortDto();
    }
}
