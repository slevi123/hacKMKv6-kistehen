package edu.kistehen.mapper;

import edu.kistehen.dto.agent.AgentRegisterDto;
import edu.kistehen.dto.agent.AgentShortDto;
import edu.kistehen.model.Agent;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Mapper(componentModel = "spring")
@Service
public abstract class AgentMapper {
    public abstract Agent registerDtoToModel(AgentRegisterDto registerDto);

    public abstract AgentShortDto modelToShortDto(Agent model);

    @IterableMapping(elementTargetType = AgentShortDto.class)
    public abstract Collection<AgentShortDto> modelsToShortDtos(Collection<Agent> models);
}
