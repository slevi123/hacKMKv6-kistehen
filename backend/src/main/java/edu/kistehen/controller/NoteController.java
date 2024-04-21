package edu.kistehen.controller;


import edu.kistehen.dto.note.NoteAddDto;
import edu.kistehen.dto.note.NoteOutDto;
import edu.kistehen.mapper.NoteMapper;
import edu.kistehen.model.Note;
import edu.kistehen.service.NoteService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Notes")
@RequestMapping("/api/clients/{clientId}/notes")
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true")
public class NoteController {
    @Autowired
    private NoteService noteService;

    @Autowired
    private NoteMapper noteMapper;

    @PostMapping
    public NoteOutDto addNote(@PathVariable("clientId") String clientId, @RequestBody NoteAddDto addDto) {
        Note note = noteMapper.dtoToModel(addDto);
        note.setDate(LocalDate.now());
        return noteMapper.modelToDto(noteService.saveNote(clientId, note, addDto.getAgentId()));
    }

    @GetMapping
    public Collection<NoteOutDto> listNotes(@PathVariable("clientId") String clientId) {
        return noteMapper.modelsToDtos(noteService.getNotes(clientId));
    }

    @GetMapping("/{noteId}")
    public NoteOutDto getNote(@PathVariable("clientId") String clientId,
                              @PathVariable("noteId") String noteId) {
        return new NoteOutDto();
    }

    @PutMapping("/{noteId}")
    public NoteOutDto updateNote(@PathVariable("clientId") String clientId,
                                 @PathVariable("noteId") String noteId,
                                 @RequestBody NoteAddDto noteAddDto) {
        return new NoteOutDto();
    }

    @DeleteMapping("/{noteId}")
    public boolean deleteNote(@PathVariable("clientId") String clientId,
                              @PathVariable("noteId") String noteId) {
        return noteService.deleteNoteById(noteId);
    }
}
