package edu.kistehen.repository;

import edu.kistehen.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface NoteRepository extends JpaRepository<Note, String> {
    Collection<Note> findAllByClientId(String clientId);
}
