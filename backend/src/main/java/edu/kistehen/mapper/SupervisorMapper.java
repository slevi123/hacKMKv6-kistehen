package edu.kistehen.mapper;

import edu.kistehen.dto.supervisor.SupervisorAddDto;
import edu.kistehen.dto.supervisor.SupervisorOutDto;
import edu.kistehen.model.Supervisor;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Service;

@Mapper(componentModel = "spring")
@Service
public abstract class SupervisorMapper {

    @Mapping(target = "agents", ignore = true)
    public abstract Supervisor addDtoToModel(SupervisorAddDto addDTo);

    public abstract SupervisorOutDto modelToShortDto(Supervisor supervisor);
}
