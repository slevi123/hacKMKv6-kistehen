package edu.kistehen.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "notes")
public class Note extends BaseEntity {
    @Column
    private String message;

    @ManyToOne
    @JoinColumn(name = "clients_id")
    private Client client;

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private Agent agent;
}
