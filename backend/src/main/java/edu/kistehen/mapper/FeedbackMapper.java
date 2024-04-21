package edu.kistehen.mapper;

import edu.kistehen.dto.feedback.FeedbackAddDto;
import edu.kistehen.dto.feedback.FeedbackOutDto;
import edu.kistehen.dto.note.NoteAddDto;
import edu.kistehen.dto.note.NoteOutDto;
import edu.kistehen.model.Feedback;
import edu.kistehen.model.Note;
import org.mapstruct.IterableMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.Collection;

@Mapper(componentModel = "spring")
public abstract class FeedbackMapper {
    public abstract FeedbackOutDto modelToDto(Feedback feedback);

    @IterableMapping(elementTargetType = FeedbackOutDto.class)
    public abstract Collection<FeedbackOutDto> modelsToDtos(Collection<Feedback> feedbacks);

    @Mapping(target = "id", ignore = true)
    public abstract Feedback dtoToModel(FeedbackAddDto dto);
}
