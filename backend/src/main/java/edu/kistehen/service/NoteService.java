package edu.kistehen.service;

import edu.kistehen.model.Agent;
import edu.kistehen.model.Note;
import edu.kistehen.repository.ClientRepository;
import edu.kistehen.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class NoteService {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private ClientRepository clientRepository;

    public boolean deleteNoteById(String id) {
        noteRepository.deleteById(id);
        return true;
    }

    public Collection<Note> getNotes(String id) {
        return noteRepository.findAllByClientId(id);
    }

    public Note saveNote(String clientId, Note note, String agentId) {
        note.setClient(clientRepository.findById(clientId).get());
        Agent agent = new Agent();
//        Ez majd nagyon kell
//        note.setAgent(agentRepository.findById(note.getAgent().getId()).get());
        return noteRepository.save(note);
    }
}
