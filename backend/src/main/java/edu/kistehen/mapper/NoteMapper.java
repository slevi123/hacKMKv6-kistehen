package edu.kistehen.mapper;

import edu.kistehen.dto.client.ClientLongDto;
import edu.kistehen.dto.client.ClientRegisterDto;
import edu.kistehen.dto.client.ClientShortDto;
import edu.kistehen.dto.note.NoteAddDto;
import edu.kistehen.dto.note.NoteOutDto;
import edu.kistehen.model.Client;
import edu.kistehen.model.Note;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Collection;

@Mapper(componentModel = "spring")
public abstract class NoteMapper {

    public abstract NoteOutDto modelToDto(Note note);
    @IterableMapping(elementTargetType = ClientShortDto.class)
    public abstract Collection<NoteOutDto> modelsToDtos(Collection<Note> Notes);

    @Mapping(target = "id", ignore = true)
    public abstract Note dtoToModel(NoteAddDto dto);
}
