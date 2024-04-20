package edu.kistehen.mapper;

import edu.kistehen.dto.client.ClientLongDto;
import edu.kistehen.dto.client.ClientRegisterDto;
import edu.kistehen.dto.client.ClientShortDto;
import edu.kistehen.model.Client;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Collection;

@Mapper(componentModel = "spring")
public abstract class ClientMapper {
    public abstract ClientLongDto modelToDto(Client client);

    @IterableMapping(elementTargetType = ClientShortDto.class)
    public abstract Collection<ClientShortDto> modelsToDtos(Collection<Client> clients);

    @Mapping(target = "id", ignore = true)
    public abstract Client dtoToModel(ClientRegisterDto dto);
}
