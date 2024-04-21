package edu.kistehen.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "feedbacks")
public class Feedback extends BaseEntity {
    @Column(nullable = false)
    private String feedback;

    @ManyToOne
    @JoinColumn(name = "agent_clients_id")
    private AgentClient agentClient;
}
