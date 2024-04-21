package edu.kistehen.dto.agent;

import lombok.Data;

@Data
public class AgentRegisterDto {
    private String name;
    private String email;
    private String supervisorId;
}
