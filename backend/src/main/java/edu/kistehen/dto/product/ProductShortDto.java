package edu.kistehen.dto.product;

import lombok.Data;

@Data
public class ProductShortDto {
    private String id;
    private String name;
    private String description;
    private Double priceS;
    private Double priceM;
    private Double priceL;
}
