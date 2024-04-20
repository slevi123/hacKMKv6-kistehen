package edu.kistehen.controller;


import edu.kistehen.dto.visit.ScheduleVisitDto;
import edu.kistehen.dto.visit.VisitOutDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;

@RestController
@Tag(name="Visits")
@RequestMapping("/api/visits")
public class VisitController {

    @Operation(summary = "Assigns the visit to the agent identified by id.", description = "Descriptions comin...")
    @PutMapping("/{visitId}/assign")
    public boolean assignAgent(@PathVariable("visitId") Long visitId, @RequestBody Long agentId,
                               @RequestBody String period) {
        return true;
    }

    @PutMapping("/{visitId}/retain")
    public boolean retainAgent(@PathVariable("visitId") Long visitId, @RequestBody Long agentId,
                               @RequestBody Long supervisorId) {
        return true;
    }

    @PostMapping()
    public VisitOutDto scheduleVisit(@RequestBody ScheduleVisitDto inDto) {
        return new VisitOutDto();
    }

    @DeleteMapping("/{visitId}")
    public boolean deleteVisit(@PathVariable("visitId") Long visitId) {
        return true;
    }
}
