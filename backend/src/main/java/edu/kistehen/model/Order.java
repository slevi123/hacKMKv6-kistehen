package edu.kistehen.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.util.Collection;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "orders")
@ToString(callSuper = true)
public class Order extends BaseEntity {
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Collection<OrderAgent> orderAgent;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Collection<OrderItem> orderItems;

    @ManyToOne
    @JoinColumn(name = "clients_id")
    private Client client;
}
