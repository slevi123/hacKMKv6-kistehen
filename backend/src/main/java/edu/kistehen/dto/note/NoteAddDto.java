package edu.kistehen.dto.note;

import edu.kistehen.dto.agent.SimpleAgentDto;
import lombok.Data;

@Data
public class NoteAddDto {
    private String message;
    private String agentId;
}
