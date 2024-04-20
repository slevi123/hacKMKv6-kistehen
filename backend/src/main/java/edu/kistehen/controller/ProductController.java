package edu.kistehen.controller;


import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.client.ClientshortDto;
import edu.kistehen.dto.product.ProductShortDto;
import edu.kistehen.dto.product.ProductUploadDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Products")
@RequestMapping("/api/products")
public class ProductController {
    @PostMapping
    public ProductShortDto uploadProduct(@RequestBody ProductUploadDto uploadDto) {
        return new ProductShortDto();
    }

    @GetMapping("/{productId}")
    public ProductShortDto getProduct(@PathVariable("productId") Long productId) {
        return new ProductShortDto();
    }

    @GetMapping
    public Collection<ProductShortDto> listProducts() {
        return new ArrayList<>();
    }

    @DeleteMapping("/{productId}")
    public boolean deleteAgent(@PathVariable("productId") Long id) {
        return true;
    }

    @PutMapping("/{productId}")
    public ProductShortDto updateAgent(@PathVariable("productId") Long id, @RequestBody ProductUploadDto agent) {
        return new ProductShortDto();
    }
}
