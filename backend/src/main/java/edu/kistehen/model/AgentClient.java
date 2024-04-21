package edu.kistehen.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import java.time.LocalDate;
import java.util.Collection;

@Data
@Entity
@EqualsAndHashCode(callSuper = true)
@Table(name = "agent_clients")
@ToString(callSuper = true)
public class AgentClient extends BaseEntity {

    @ManyToOne
    @JoinColumn(name = "agent_id")
    private Agent agent;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @OneToMany(mappedBy = "agentClient", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private Collection<Feedback> feedbacks;

    @Column
    private LocalDate date;
}
