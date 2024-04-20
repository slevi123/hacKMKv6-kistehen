package edu.kistehen.controller;


import edu.kistehen.dto.note.NoteAddDto;
import edu.kistehen.dto.note.NoteOutDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@Tag(name="Notes")
@RequestMapping("/api/clients/{clientId}/notes")
public class NoteController {
    @PostMapping
    public NoteOutDto addNote(@PathVariable("clientId") String clientId, @RequestBody NoteAddDto addDto) {
        return new NoteOutDto();
    }

    @GetMapping
    public Collection<NoteOutDto> listNotes(@PathVariable("clientId") String clientId) {
        return new ArrayList<>();
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
        return true;
    }
}
