package edu.kistehen.controller;

import edu.kistehen.dto.supervisor.SupervisorAddDto;
import edu.kistehen.dto.supervisor.SupervisorOutDto;
import edu.kistehen.mapper.SupervisorMapper;
import edu.kistehen.model.Supervisor;
import edu.kistehen.repository.SupervisorRepository;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@Tag(name="Supervisors")
@RequestMapping("/api/supervisors")
public class SupervisorController {

    @Autowired
    SupervisorMapper supervisorMapper;

    @Autowired
    SupervisorRepository supervisorRepository;


    @PostMapping
    public SupervisorOutDto addSupervisor(@RequestBody SupervisorAddDto supervisor) {
        Supervisor supervisorModel = supervisorMapper.addDtoToModel(supervisor);
        supervisorRepository.saveAndFlush(supervisorModel);

        return supervisorMapper.modelToShortDto(supervisorModel);
    }

    @PatchMapping("/{supervisorId}/deactivate")
    public boolean deactivateSupervisor(@PathVariable("supervisorId") String supervisorId) {
        return true;
    }

    @PatchMapping("/{supervisorId}/reactivate")
    public boolean reactivateSupervisor(@PathVariable("supervisorId") String supervisorId) {
        return true;
    }

    @DeleteMapping("/{supervisorId}")
    public boolean deleteSupervisor(@PathVariable("supervisorId") String supervisorId) {
        return true;
    }

    @PutMapping("/{supervisorId}")
    public SupervisorOutDto updateSupervisor(@PathVariable("supervisorId") String supervisorId) {
        return new SupervisorOutDto();
    }
}
