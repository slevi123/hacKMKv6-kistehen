package edu.kistehen.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Collection;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "products")
@ToString(callSuper = true)
public class Product extends BaseEntity {
    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double priceS;

    @Column(nullable = false)
    private Double priceM;

    @Column(nullable = false)
    private Double priceL;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Collection<OrderItem> orderItems;
}
