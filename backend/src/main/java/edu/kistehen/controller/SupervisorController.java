package edu.kistehen.controller;

import edu.kistehen.dto.supervisor.SupervisorAddDto;
import edu.kistehen.dto.supervisor.SupervisorOutDto;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;


@RestController
@Tag(name="Supervisors")
@RequestMapping("/api/supervisors")
public class SupervisorController {

    @PostMapping
    public SupervisorOutDto addSupervisor(@RequestBody SupervisorAddDto supervisor) {
        return new SupervisorOutDto();
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
