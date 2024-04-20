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
    @GetMapping
    public Collection<NoteOutDto> listNotes(@PathVariable("clientId") Long clientId) {
        return new ArrayList<>();
    }

    @GetMapping("/{noteId}")
    public NoteOutDto getNote(@PathVariable("clientId") Long clientId,
                              @PathVariable("noteId") Long noteId) {
        return new NoteOutDto();
    }

    @PutMapping("/{noteId}")
    public NoteOutDto updateNote(@PathVariable("clientId") Long clientId,
                                 @PathVariable("noteId") Long noteId,
                                 @RequestBody NoteAddDto noteAddDto) {
        return new NoteOutDto();
    }

    @DeleteMapping("/{noteId}")
    public boolean deleteNote(@PathVariable("clientId") Long clientId,
                              @PathVariable("noteId") Long noteId) {
        return true;
    }
}
