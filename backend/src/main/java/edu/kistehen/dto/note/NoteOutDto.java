package edu.kistehen.dto.note;

import lombok.Data;

import java.time.LocalDate;

@Data
public class NoteOutDto {
    private String id;
    private String message;
    private LocalDate date;
}
