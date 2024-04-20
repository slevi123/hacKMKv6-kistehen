package edu.kistehen.repository;

import edu.kistehen.model.Agent;
import edu.kistehen.model.Supervisor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface SupervisorRepository  extends JpaRepository<Supervisor, Long>  {
}
