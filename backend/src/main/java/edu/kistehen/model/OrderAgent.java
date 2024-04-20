package edu.kistehen.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "order_agents")
@ToString(callSuper = true)
public class OrderAgent extends BaseEntity {
    @ManyToOne
    @JoinColumn(name = "agents_id")
    private Agent agent;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
}
